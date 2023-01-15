import { RoomRepository } from "../domain/room.repository";
import { RoomEntity } from "../domain/room.entity";

export class RoomUseCases {
    constructor(private roomRepository: RoomRepository) {}

    async create(room: RoomEntity): Promise<RoomEntity> {
        return await this.roomRepository.create(room);
    }

    async update(room: RoomEntity): Promise<RoomEntity> {
        return await this.roomRepository.update(room);
    }

    async delete(_id: any): Promise<RoomEntity> {
        return await this.roomRepository.delete(_id);
    }

    async findByFilters(filters: any): Promise<RoomEntity[]> {
        return await this.roomRepository.findByFilters(filters);
    }

    async findById(_id: any): Promise<RoomEntity> {
        return await this.roomRepository.findById(_id);
    }
}
