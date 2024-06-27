import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            id: userId,
        },
        select: {
            title: true,
            description: true
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);
