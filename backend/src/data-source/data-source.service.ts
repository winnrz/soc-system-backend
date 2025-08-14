import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { updateDataSourceDto } from './dto';

@Injectable()
export class DataSourceService {
  constructor(private prismaService: PrismaService) {}

  async createDataSource(rows: any []) {
    try {
      return await this.prismaService.dataSource.create({
        data: {
          data: rows, 
        },
      });
    } catch (error) {
      throw new BadRequestException(
        `Failed to create data source: ${error.message}`,
      );
    }
  }

  async updateDataSource(id: number, dataSource: any) {
    try {
      return await this.prismaService.dataSource.update({
        where: { id },
        data: {
          data: dataSource,
        },
      });
    } catch (error) {
      throw new BadRequestException(
        `Failed to update data source: ${error.message}`,
      );
    }
  }
}
