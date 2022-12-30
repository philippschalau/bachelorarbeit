import type {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export type TextModule = {
    id: string;
    name: string;
    content: string;

};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const textModules: TextModule[] = await prisma.textModule.findMany();
        res.json(textModules);
    } catch (error) {
        console.error(error);
        res.status(500).end();
    } finally {
        await prisma.$disconnect();
    }
};