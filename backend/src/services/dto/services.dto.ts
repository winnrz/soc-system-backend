import { IsNotEmpty, IsString } from "class-validator";

export class  ServicesDTO {
    @IsString()
    @IsNotEmpty()
    name: string
}