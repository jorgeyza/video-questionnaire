import Recording from 'src/components/Recording';

interface Props {
  text: string;
}

const RecordingPage = ({ text }: Props) => {
  return <Recording text={text} />;
};

export default RecordingPage;
