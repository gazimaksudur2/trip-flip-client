const YoutubeEmbed = () => {
  const youtubeUrl = `https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com`;

  return (
    <div className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden">
      <iframe
        className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        src={youtubeUrl}
        allowFullScreen
        title="Embedded Youtube Video"
      />
      {/* <h2>HelloWorld</h2> */}
    </div>
  );
};

export default YoutubeEmbed;
