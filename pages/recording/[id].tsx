import { useQuery } from '@apollo/client';
import { Skeleton } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Recording from 'src/components/Recording';

import { GET_VIDEO_QUESTIONS } from 'src/graphql';

const RecordingPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { loading, error, data } = useQuery(GET_VIDEO_QUESTIONS);

  if (error) return <p>Error :(</p>;

  const videoQuestion = data?.videoQuestions?.find((question: { id: string }) => question.id === id)?.question;

  return (
    <Skeleton isLoaded={!loading}>
      <Recording text={videoQuestion} />;
    </Skeleton>
  );
};

export default RecordingPage;
