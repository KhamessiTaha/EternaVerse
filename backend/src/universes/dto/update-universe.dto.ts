import { IsOptional, IsString, IsObject } from 'class-validator';

export class UpdateUniverseDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsObject()
  constants?: Record<string, any>;
}
