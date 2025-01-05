import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UniversesService } from './universes.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('universes')
export class UniversesController {
  constructor(private readonly universesService: UniversesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body: any, @Request() req: any) {
    return this.universesService.create(body, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req) {
    return this.universesService.findByUser(req.user.id); // Fetch universes by user ID
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    return this.universesService.findByIdAndUser(id, req.user.id); // Fetch a specific universe by ID and user ID
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: any,
    @Request() req: any,
  ) {
    return this.universesService.update(id, body, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: any) {
    return this.universesService.remove(id, req.user.id);
  }
}
