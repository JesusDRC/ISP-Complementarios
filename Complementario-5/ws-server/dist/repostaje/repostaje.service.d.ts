import { CreateRepostajeDto } from './dto/create-repostaje.dto';
import { UpdateRepostajeDto } from './dto/update-repostaje.dto';
import { Repostaje } from './entities/repostaje.entity';
import { Repository } from 'typeorm';
export declare class RepostajeService {
    private readonly repostajeRepository;
    private readonly logger;
    constructor(repostajeRepository: Repository<Repostaje>);
    create(createRepostajeDto: CreateRepostajeDto): Promise<any>;
    findAll(): string;
    findOne(REPOSTAJE_ID: number): Promise<Repostaje>;
    update(REPOSTAJE_ID: number, updateRepostajeDto: UpdateRepostajeDto): Promise<Repostaje>;
    remove(REPOSTAJE_ID: number): Promise<void>;
    prueba(): String[];
}
