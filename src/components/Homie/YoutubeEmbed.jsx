const YoutubeEmbed = () => {
  // const youtubeUrl = `https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com`;

  return (
    <div className="embed-responsive relative w-full flex justify-center items-center overflow-hidden">
      {/* <iframe
        className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        src={youtubeUrl}
        allowFullScreen
        title="Embedded Youtube Video"
      /> */}
      <iframe
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshaharia.khansafin%2Fposts%2Fpfbid0kk6VkPeYaP9XdH5GbeVj5SNCnWhHjDmmbStYwwESppo4m8rgcdx11qFwg3kHfBMGl&show_text=true&width=500&is_preview=true"
      width="500"
      height="466"
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
      {/* <h2>HelloWorld</h2> */}
    </div>
  );
};

export default YoutubeEmbed;
