import { RoomEntity } from "./room.entity";

export class RoomValue implements RoomEntity {
    name: string;
    _id?: any;

    constructor({ name, _id }: { name: string; _id?: any }) {
        this.name = name;
        this._id = _id;
    }
}
