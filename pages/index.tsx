import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'

import VideoQuestion from 'components/VideoQuestion'

const VIDEO_QUESTIONS = [
  { id: 1, text: 'If you were offered the position of mayor of your city, would you take it?' },
  { id: 2, text: 'If you were offered the position of mayor of your city, would you take it?' },
  { id: 3, text: 'If you were offered the position of mayor of your city, would you take it?' },
  { id: 4, text: 'If you were offered the position of mayor of your city, would you take it?' }
]

const HomePage: NextPage = () => {
  return (
    <>
      <Heading as='h1' color='neutral' paddingBottom={10} size='2xl' textAlign='center'>
        Video Questionnaire
      </Heading>
      <Flex columnGap={2}>
        {VIDEO_QUESTIONS.map((question) => (
          <VideoQuestion key={question.id} text={question.text} />
        ))}
      </Flex>
    </>
  )
}

export default HomePage
