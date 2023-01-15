import { RoomEntity } from "./room.entity";

export interface RoomRepository {
    create(room: RoomEntity): Promise<RoomEntity>;
    update(room: RoomEntity): Promise<RoomEntity>;
    delete(_id: any): Promise<RoomEntity>;
    findByFilters(filters: any): Promise<RoomEntity[]>;
    findById(_id: any): Promise<RoomEntity>;
}
