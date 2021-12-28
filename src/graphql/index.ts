import { gql } from '@apollo/client';

export const GET_VIDEO_QUESTIONS = gql`
  query GetVideoQuestions {
    videoQuestions {
      id
      question
    }
  }
`;
