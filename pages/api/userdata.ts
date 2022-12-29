import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type UserData = {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    street: string;
    city: string;
    zip: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const userData: UserData[] = await prisma.userData.findMany();
            res.json(userData);
        } else if (req.method === 'POST') {
            const userData: UserData = req.body;
            await prisma.userData.create({ data: userData });
            res.status(201).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).end();
    } finally {
        await prisma.$disconnect();
    }
};

