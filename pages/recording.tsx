import Recording from 'components/Recording';

interface Props {
  text: string;
}

const RecordingPage = ({ text }: Props) => {
  return <Recording text={text} />;
};

export default RecordingPage;
