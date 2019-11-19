import React from 'react';

const TeamMember = props => {
  return (
    <section className="sectionComponentTeamMember">
      <span className="memberPicture">
        <img
          className="membersupportPicture"
          src={props.url}
          alt="members"
          border="0"
          loading="lazy"
        />
      </span>
      <span className="memberInfo">
        <h2 className="name">{props.name}</h2>
        <h2 className="quote">{props.description}</h2>
      </span>
    </section>
  );
};

export default TeamMember;
