import { Filters } from "./../interfaces/Filters";
import { RoomRepository } from "../../domain/room.repository";
import { RoomEntity } from "../../domain/room.entity";

const mockRooms = [
    {
        id: "1",
        name: "Room 1",
    },
    {
        id: "2",
        name: "Room 2",
    },
    {
        id: "3",
        name: "Room 3",
    },
];

export class MockRepository implements RoomRepository {
    async create(room: RoomEntity): Promise<any> {
        return room;
    }
    async update(room: RoomEntity): Promise<any> {
        return room;
    }

    async delete(id: string): Promise<any> {
        return id;
    }

    async findByFilters(filters: Filters): Promise<RoomEntity[]> {
        console.log({ filters });
        if (filters?.name) {
            return mockRooms.filter((r) => r.name === filters.name);
        }
        return mockRooms;
    }

    async findById(id: string): Promise<RoomEntity> {
        return mockRooms.find((r) => r.id === id);
    }
}
