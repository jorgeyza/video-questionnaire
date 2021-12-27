import { objectType, extendType, stringArg, nonNull } from 'nexus';

export const VideoQuestion = objectType({
  definition(t) {
    t.string('id');
    t.string('question');
  },
  name: 'VideoQuestion'
});

export const VideoQuestionQuery = extendType({
  definition(t) {
    t.nonNull.list.field('videoQuestions', {
      resolve(_root, args, ctx) {
        return ctx.prisma.videoQuestion.findMany();
      },
      type: 'VideoQuestion'
    });
  },
  type: 'Query'
});

export const PostVideoQuestion = extendType({
  definition(t) {
    t.nonNull.field('createVideoQuestion', {
      args: {
        question: nonNull(stringArg())
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.videoQuestion.create({
          data: {
            question: args.question
          }
        });
      },
      type: 'VideoQuestion'
    });
  },
  type: 'Mutation'
});
