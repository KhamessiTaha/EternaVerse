import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { UniversesService } from './universes.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateUniverseDto } from './dto/update-universe.dto';

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
  async findAll(
    @Request() req,
    @Query('page') page: number = 1, // Default to page 1
    @Query('limit') limit: number = 10, // Default to 10 universes per page
    @Query('name') name?: string, // Optional filtering by name
  ) {
    return this.universesService.findAll(req.user.id, { page, limit, name });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    return this.universesService.findByIdAndUser(id, req.user.id); // Fetch a specific universe by ID and user ID
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateUniverseDto: UpdateUniverseDto,
  ) {
    return this.universesService.update(req.user.id, id, updateUniverseDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: any) {
    return this.universesService.remove(id, req.user.id);
  }
}
