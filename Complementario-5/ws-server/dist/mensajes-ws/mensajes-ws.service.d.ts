import { Socket } from 'socket.io';
import { Repostaje } from 'src/repostaje/entities/repostaje.entity';
import { Repository } from 'typeorm';
import { RepostajeService } from 'src/repostaje/repostaje.service';
export declare class MensajesWsService {
    private readonly repostajeRepository;
    private readonly repostajeService;
    private connectedClients;
    constructor(repostajeRepository: Repository<Repostaje>, repostajeService: RepostajeService);
    registerClient(client: Socket, ID: number): Promise<void>;
    removeClient(clientId: string): void;
    getConnectedClients(): string[];
    getStudentFullName(id: string): any;
}
