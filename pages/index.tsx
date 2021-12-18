import type { NextPage } from 'next'
import Head from 'next/head'


// import Header from 'components/header.js'
import VideoQuestion from 'components/videoQuestion'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Video Questionnaire</title>
        <meta name='description' content='Create your own video questionnaire' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <VideoQuestion />
    </>
  )
}

export default Home
