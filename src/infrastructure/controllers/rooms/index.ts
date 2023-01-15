import { RoomUseCases } from "../../../application/room.usecases";

export class RoomController {
    constructor(private readonly roomUseCases: RoomUseCases) {}

    public create = async ({ body }) => {
        const room = await this.roomUseCases.create(body);
        return room;
    };
    public update = async ({ body }) => {
        const room = await this.roomUseCases.update(body);
        return room;
    };
    public delete = async ({ _id }: { _id: any }) => {
        const room = await this.roomUseCases.delete(_id);
        return room;
    };
    public findByFilters = async ({ body }) => {
        const rooms = await this.roomUseCases.findByFilters(body);
        return rooms;
    };
    public findById = async ({ _id }: { _id: any }) => {
        const room = await this.roomUseCases.findById(_id);
        return room;
    };
}
