import { Repository } from 'typeorm';
import { Project } from './project.entity';
export declare class ProjectService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    createProject(nameproject: string, description: string, fechaInicio: Date, fechaFinalizacion: Date): Promise<Project>;
    getAllProject(): Promise<Project[]>;
    deleteRepo(id: number): Promise<void>;
}
