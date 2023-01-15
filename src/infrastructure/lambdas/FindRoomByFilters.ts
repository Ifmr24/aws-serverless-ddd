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
        const filters = event.queryStringParameters;

        const rooms = await roomController.findByFilters({
            filters,
        });

        return lambdaResponse(rooms, 200);
    } catch (error) {
        return lambdaResponse(error, 400);
    }
};
