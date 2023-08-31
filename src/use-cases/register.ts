import { UsersRepository } from "@/repositories/user-repository";
import { User } from "@prisma/client";

interface RegisterUserCaseRequest {
    name: string;
    email: string;
}

interface RegisterUserCaseResponse {
    user: User
}

export class RegisterUseCase {

    constructor(private usersRepository: UsersRepository) {}

    async execute({
        name,
        email,
    }: RegisterUserCaseRequest): Promise<RegisterUserCaseResponse> {
        const user = await this.usersRepository.create({
            name,
            email,
        })

        return { user }
    }
}