import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly ProjectService: ProjectService) {}

  @Post()
  createProject(@Body() { nameproject, description, fechaInicio, fechaFinalizacion }: { nameproject: string; description: string ,fechaInicio : Date, fechaFinalizacion: Date }) {
    return this.ProjectService.createProject(nameproject, description, fechaInicio, fechaFinalizacion);
  }

  @Get()
  getAllProject() {
    return this.ProjectService.getAllProject();
  }

  @Get(':id')
  deleteRepo(@Param('id') id: number) {
    return this.ProjectService.deleteRepo(id);
  }
}
