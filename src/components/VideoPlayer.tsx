type Props = {
  url: string | undefined;
};

const VideoPlayer = ({ url }: Props) => {
  return (
    <video
      src={url}
      controls
      playsInline
      className="bg-black mb-3.5 rounded-lg w-full aspect-video"
    />
  );
};

export default VideoPlayer;
