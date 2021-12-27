import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const questions = await prisma.videoQuestion.createMany({
    data: [
      { question: 'If you were offered the position of mayor of your city, would you take it?' },
      { question: "What's something you always wanted to do as a child but never got to do it?" },
      { question: "If you inherited or won a million dollars, what's the very first thing you would do with the money?" },
      { question: 'If you were in a witness protection program, what would be your new name and where would you go?' }
    ]
  });
  console.log("🚀 ~ file: seed.ts ~ line 13 ~ main ~ questions have been added to your PostgreSQL DB", questions)
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });