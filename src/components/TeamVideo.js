import React from 'react';

const TeamVideo = props => {
  return (
    <section className="sectionComponentLeft">
      <span className="sectionPicture">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/Qk-SgH0Bvhg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        />
      </span>
      <span className="columnText noshow">
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
