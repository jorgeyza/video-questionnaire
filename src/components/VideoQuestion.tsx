import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BsPlayCircle } from 'react-icons/bs';

interface Props {
  id: string;
  text: string;
}

const VideoQuestion = ({id, text }: Props) => {
  return (
    <Flex
      _hover={{ boxShadow: '2xl', outlineColor: 'wheat' }}
      borderRadius='8px'
      data-test='video-question-card'
      flexDirection='column'
      outline='1px solid'
      outlineColor='transparent'>
      <Link href={`/recording/${id}`} passHref>
        <Box
          _hover={{ color: 'purple.200' }}
          backgroundColor='black'
          borderTopRadius='8px'
          color='neutral'
          cursor='pointer'
          data-test='video-container'
          h='336px'
          position='relative'>
          <Box id='this should be a video' />
          <Icon as={BsPlayCircle} bottom={3} color='inherit' data-test='play-icon' h={12} left={3} position='absolute' w={12} />
        </Box>
      </Link>
      <Box backgroundColor='neutral' borderBottomRadius='8px' data-test='question-container' minH='108px' width='100%'>
        <Text color='text' data-test='question-text' fontSize='sm' padding={3}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

export default VideoQuestion;
