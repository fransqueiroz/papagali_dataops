import { FastifyInstance } from "fastify";
import { ping } from "./controller/ping";

export async function appRoutes(app: FastifyInstance) {
    app.get('/ping', ping)
}