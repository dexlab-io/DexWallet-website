import React from 'react';

const Social = () => {
  return (
    <section className="social">
      <a className="socialIcons" href="https://dexpay.me/discord">
        <img
          className="supportPicture"
          src="/img/discord.svg"
          alt="discord"
          border="0"
          height="20"
        />
      </a>
      <a className="socialIcons" href="https://twitter.com/dexlab_io">
        <img
          className="supportPicture"
          src="/img/twitter.svg"
          alt="twitter"
          border="0"
          height="20"
        />
      </a>
      <a className="socialIcons" href="https://t.me/joindexlab">
        <img
          className="supportPicture"
          src="/img/telegram.svg"
          alt="telegram"
          border="0"
          height="20"
        />
      </a>
      <a className="socialIcons" href="https://medium.com/dexlab-io">
        <img
          className="supportPicture"
          src="/img/medium.svg"
          alt="medium"
          border="0"
          height="20"
        />
      </a>
      <a className="socialIcons" href="https://github.com/dexlab-io">
        <img
          className="supportPicture"
          src="/img/github.svg"
          alt="github"
          border="0"
          height="20"
        />
      </a>
    </section>
  );
};

export default Social;
