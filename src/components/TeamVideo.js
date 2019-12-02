import React from 'react';

const TeamVideo = props => {
  return (
    <section className="sectionComponentLeft">
      <span className="sectionPicture">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/RHkcMzRaw5U"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </span>
      <span className="columnText">
        <span className="leftContentText">
          <h1 className="sectionTitle">Meet the team</h1>
          <h2 className="sectionSub">
            What we are doing, explained in 2 minutes
          </h2>
        </span>
      </span>
    </section>
  );
};

export default TeamVideo;
