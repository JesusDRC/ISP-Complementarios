import { RepostajeService } from './repostaje.service';
import { CreateRepostajeDto } from './dto/create-repostaje.dto';
import { UpdateRepostajeDto } from './dto/update-repostaje.dto';
export declare class RepostajeController {
    private readonly repostajeService;
    constructor(repostajeService: RepostajeService);
    create(createRepostajeDto: CreateRepostajeDto): Promise<any>;
    findAll(): string;
    findOne(REPOSTAJE_ID: number): Promise<import("./entities/repostaje.entity").Repostaje>;
    update(REPOSTAJE_ID: number, UpdateRepostajeDto: UpdateRepostajeDto): Promise<{
        message: string;
        repostaje: import("./entities/repostaje.entity").Repostaje;
    }>;
    remove(REPOSTAJE_ID: number): Promise<{
        message: string;
    }>;
}
