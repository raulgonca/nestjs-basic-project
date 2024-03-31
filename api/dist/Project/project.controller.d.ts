import { ProjectService } from './project.service';
export declare class ProjectController {
    private readonly ProjectService;
    constructor(ProjectService: ProjectService);
    createUser({ nameproject, description, fechaInicio, fechaFinalizacion }: {
        nameproject: string;
        description: string;
        fechaInicio: Date;
        fechaFinalizacion: Date;
    }): Promise<import("src/Project/project.entity").Project>;
    getAllProject(): Promise<import("src/Project/project.entity").Project[]>;
    deleteRepo(id: number): Promise<void>;
}
