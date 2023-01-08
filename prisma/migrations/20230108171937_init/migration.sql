-- CreateTable
CREATE TABLE "UserData" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "salutation" TEXT NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TextModule" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "TextModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grade" (
    "id" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "userDataId" TEXT NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserData_email_key" ON "UserData"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TextModule_name_key" ON "TextModule"("name");

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_userDataId_fkey" FOREIGN KEY ("userDataId") REFERENCES "UserData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
