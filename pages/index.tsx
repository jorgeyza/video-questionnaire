import type { NextPage } from 'next';
import { Flex, Heading, Skeleton } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';

import VideoQuestion from 'src/components/VideoQuestion';

import { GET_VIDEO_QUESTIONS } from 'src/graphql';

interface videoQuestions {
  id: string;
  question: string;
}

const HomePage: NextPage = () => {
  const { loading, error, data } = useQuery(GET_VIDEO_QUESTIONS);

  if (error) return <p>Error :(</p>;

  return (
    <>
      <Heading as='h1' color='neutral' paddingBottom={10} size='2xl' textAlign='center'>
        Video Questionnaire
      </Heading>
      <Flex columnGap={2} overflowX='auto' w='80vw'>
        {data?.videoQuestions.map((question: videoQuestions) => (
          <Skeleton flex='0 0 245px' isLoaded={!loading} key={question.id}>
            <VideoQuestion  id={question.id} text={question.question} />
          </Skeleton>
        ))}
      </Flex>
    </>
  );
};

export default HomePage;
