import type {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export type UserData = {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    street: string;
    city: string;
    zip: string;
    salutation: string;
    grades: Grade[];
};

export type Grade = {
    id: string;
    module: string;
    grade: string;
};

const modules = ['Einführung BWL VWL', 'Webtechnologien', 'Einführung in die Wirtschaftsinformatik'];
const grades = ['1,0', '1,3', '1,7', '2,0', '2,3', '2,7', '3,0', '3,3', '3,7', '4,0'];


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const userData: UserData[] = await prisma.userData.findMany({
                select: {
                    id: true,
                    email: true,
                    firstname: true,
                    lastname: true,
                    street: true,
                    city: true,
                    zip: true,
                    salutation: true,
                    grades: {
                        select: {
                            id: true,
                            module: true,
                            grade: true,
                        },
                    },
                },
            });
            res.json(userData);
        } else if (req.method === 'POST') {
            const userData: UserData = req.body;
            const createGrades = [];
            for (let i = 0; i < 4; i++) {
                const randomModule = modules[Math.floor(Math.random() * modules.length)];
                const randomGrade = grades[Math.floor(Math.random() * grades.length)];

                const existingGradeCount = await prisma.grade.count({
                    where: {
                        module: randomModule,
                        grade: randomGrade,
                    },
                });

                if (existingGradeCount === 0) {
                    createGrades.push({
                        module: randomModule,
                        grade: randomGrade,
                    });
                }

            }
            await prisma.userData.create({
                data: {
                    ...userData,
                    grades: {
                        create: createGrades,
                    },
                },
            });
            res.status(201).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).end();
    } finally {
        await prisma.$disconnect();
    }
};

