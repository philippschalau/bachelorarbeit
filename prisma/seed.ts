import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const Users = [
    {
        id: 'f1bdf45e-1b1c-11ec-9621-0242ac130002',
        email: 'user1@example.com',
        firstname: 'Max',
        lastname: 'Mustermann',
        street: '123 Main St',
        city: 'New York',
        zip: '10001',
        salutation: 'Herr',
    },
    {
        id: '9371f314-1c93-11ec-9621-0242ac130002',
        email: 'user2@example.com',
        firstname: 'Maxine',
        lastname: 'Musterfrau',
        street: '456 Main St',
        city: 'New York',
        zip: '10002',
        salutation: 'Frau',
    },
];

const Grades = [
    {
        id: '1e3399e6-1d94-11ec-9621-0242ac130002',
        module: 'Mathematik',
        grade: '3,0',
        userDataId: 'f1bdf45e-1b1c-11ec-9621-0242ac130002',

    },
    {
        id: '2197dea8-1d94-11ec-9621-0242ac130002',
        module: 'Datenbanktechnologien',
        grade: '1,0',
        userDataId: 'f1bdf45e-1b1c-11ec-9621-0242ac130002',
    },
    {
        id: '3e3399e6-1d94-11ec-9621-0242ac130002',
        module: 'Einführung in die Wirtschaftsinformatik',
        grade: '1,3',
        userDataId: 'f1bdf45e-1b1c-11ec-9621-0242ac130002',

    },
    {
        id: '4197dea8-1d94-11ec-9621-0242ac130002',
        module: 'Unternehmenssoftware',
        grade: '2,7',
        userDataId: '9371f314-1c93-11ec-9621-0242ac130002',
    },
    {
        id: '5e3399e6-1d94-11ec-9621-0242ac130002',
        module: 'Rechnernetze',
        grade: '2,3',
        userDataId: '9371f314-1c93-11ec-9621-0242ac130002',

    },
    {
        id: '6197dea8-1d94-11ec-9621-0242ac130002',
        module: 'Webtechnologien',
        grade: '3,3',
        userDataId: '9371f314-1c93-11ec-9621-0242ac130002',
    }
];


async function runSeeders() {
    await Promise.all(
        Users.map(async (user) =>
            prisma.userData.upsert({
                where: {id: user.id},
                update: {},
                create: user,
            })
        )
    );

    await Promise.all(
        Grades.map(async (grades) =>
            prisma.grade.upsert({
                where: {id: grades.id},
                update: {},
                create: grades,
            })
        )
    );


    await prisma.textModule.create({
        data: {
            name: 'Leistungsnachweis',
            subject: 'Ihr angeforderter Leistungsnachweis',
            content: ''
        },
    })
}


runSeeders()

    .catch((e) => {

        console.error(`There was an error while seeding: ${e}`);

        process.exit(1);

    })

    .finally(async () => {

        console.log('Successfully seeded database. Closing connection.');

        await prisma.$disconnect();

    });

export {}
