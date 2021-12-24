import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BsPlayCircle } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiSkipPreviousCircle, BiSkipNextCircle } from 'react-icons/bi';

interface Props {
  text: string;
}

const Recording = ({ text }: Props) => {
  return (
    <Flex data-test='main-container' flexDirection='column' w='864px'>
        <Link href='/' passHref>
          <Flex _hover={{ color: 'wheat' }} alignItems='center' color='neutral' columnGap={3} cursor='pointer' maxW='fit-content'>
            <Icon as={AiOutlineArrowLeft} color='inherit' data-test='left-arrow-icon' h={12} w={6} />
            <Text as='span' fontSize='sm'>
              Go back
            </Text>
          </Flex>
        </Link>
        <Flex borderRadius='8px' flexDirection='column'>
          <Box
            backgroundColor='black'
            borderTopRadius='8px'
            color='neutral'
            cursor='pointer'
            data-test='video-container'
            h='612px'
            position='relative'>
            <Box id='this should be a video' />
            <Icon as={BsPlayCircle} bottom={3} color='inherit' data-test='play-icon' h={12} left={3} position='absolute' w={12} />
          </Box>
          <Box backgroundColor='neutral' borderBottomRadius='8px' data-test='question-container' minH='96px' width='100%'>
            <Text color='text' data-test='question-text' fontSize='md' padding={3}>
              {text}
            </Text>
          </Box>
          <Flex color='neutral' justifyContent='space-between' marginTop={3}>
            <Flex _hover={{color:'wheat'}} alignItems='center' columnGap={1} cursor='pointer'>
              <Icon as={BiSkipPreviousCircle} color='inherit' data-test='play-icon' h={12} w={12} />
              <Text as='span' fontSize='2xl'>
                Previous
              </Text>
            </Flex>
            <Flex _hover={{color:'wheat'}} alignItems='center' columnGap={1} cursor='pointer'>
              <Text as='span' fontSize='2xl'>
                Next
              </Text>
              <Icon as={BiSkipNextCircle} color='inherit' data-test='play-icon' h={12} w={12} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
  );
};

export default Recording;
