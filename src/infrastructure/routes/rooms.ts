import { MockRepository } from "../repositories/mock.repository";
import { APIGatewayProxyEvent } from "aws-lambda";
import { RoomUseCases } from "../../application/room.usecases";
import { RoomController } from "../controllers/rooms";

const roomRepository = new MockRepository();
const roomUseCases = new RoomUseCases(roomRepository);
const roomController = new RoomController(roomUseCases);

const successResponse = (body: any) => ({
    statusCode: 200,
    body: JSON.stringify(body),
});

const errorResponse = (error: any) => ({
    statusCode: 400,
    body: JSON.stringify(error),
});

export const CreateRoom = async (event: APIGatewayProxyEvent) => {
    try {
        const body = JSON.parse(event.body);
        const room = await roomController.create({ body });
        return successResponse(room);
    } catch (error) {
        return errorResponse(error);
    }
};

export const UpdateRoom = async (event: APIGatewayProxyEvent) => {
    try {
        const body = JSON.parse(event.body);
        const room = await roomController.update({ body });
        return successResponse(room);
    } catch (error) {
        return errorResponse(error);
    }
};

export const DeleteRoom = async (event: APIGatewayProxyEvent) => {
    try {
        const { id } = event.pathParameters;
        const room = await roomController.delete({ _id: id });
        return successResponse(room);
    } catch (error) {
        return errorResponse(error);
    }
};

export const FindRoomByFilters = async (event: APIGatewayProxyEvent) => {
    try {
        const body = JSON.parse(event.body);
        const rooms = await roomController.findByFilters({ body });
        return successResponse(rooms);
    } catch (error) {
        return errorResponse(error);
    }
};

export const FindRoomById = async (event: APIGatewayProxyEvent) => {
    try {
        const { id } = event.pathParameters;
        const room = await roomController.findById({ _id: id });
        return successResponse(room);
    } catch (error) {
        return errorResponse(error);
    }
};
