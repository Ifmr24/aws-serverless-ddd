import { lambdaResponse } from "../utils/lambdaResponse";
import { MockRepository } from "../repositories/mock.repository";
import { APIGatewayProxyEvent } from "aws-lambda";
import { RoomUseCases } from "../../application/room.usecases";
import { RoomController } from "../controllers/rooms";

const roomRepository = new MockRepository();
const roomUseCases = new RoomUseCases(roomRepository);
const roomController = new RoomController(roomUseCases);

export const handler = async (event: APIGatewayProxyEvent) => {
    try {
        const { id } = event.pathParameters;
        const room = await roomController.delete({ _id: id });
        return lambdaResponse(room, 200);
    } catch (error) {
        return lambdaResponse(error, 400);
    }
};
