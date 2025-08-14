import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<User> {
    try {
      return await this.prisma.user.findFirstOrThrow({
        where: { email, deletedAt: null },
      });
    } catch (error: any) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        // User not found
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }

  async updateRefreshToken(userId: number, refreshToken: string | null) {
    // Find the user if exists
    const user = await this.prisma.user.findFirst({
      where: { id: userId, deletedAt: null },
    });

    if (!user) throw new Error('User not found or deleted');

    const hashedToken = refreshToken ? await argon2.hash(refreshToken) : null;
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: hashedToken },
    });
  }

  async me(email: string): Promise<Omit<User, 'password'>> {
    try {
      const userProfile = await this.findOne(email);

      //Omit password
      const { password, ...safeUser } = userProfile;
      return safeUser;
    } catch (error) {
      throw error; // Optional: wrap or log
    }
  }
}
