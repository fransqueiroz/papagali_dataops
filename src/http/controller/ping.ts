import { FastifyReply, FastifyRequest } from "fastify";

export async function ping (request:FastifyRequest,reply: FastifyReply) {

    return reply.status(200).send({
        mensage: 'pong',
        status: 200
    })

}