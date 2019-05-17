import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Social = () => {
  return (
    <section className="social">
      <OutboundLink className="socialIcons" href="https://dexpay.me/discord">
        <img
          className="supportPicture"
          src="/img/discord.svg"
          alt="iphone"
          border="0"
          height="20"
        />
      </OutboundLink>
      <OutboundLink
        className="socialIcons"
        href="https://twitter.com/dexlab_io"
      >
        <img
          className="supportPicture"
          src="/img/twitter.svg"
          alt="iphone"
          border="0"
          height="20"
        />
      </OutboundLink>
      <OutboundLink className="socialIcons" href="https://t.me/joindexlab">
        <img
          className="supportPicture"
          src="/img/telegram.svg"
          alt="iphone"
          border="0"
          height="20"
        />
      </OutboundLink>
      <OutboundLink className="socialIcons" href="https://medium.com/dexlab-io">
        <img
          className="supportPicture"
          src="/img/medium.svg"
          alt="iphone"
          border="0"
          height="20"
        />
      </OutboundLink>
      <OutboundLink className="socialIcons" href="https://github.com/dexlab-io">
        <img
          className="supportPicture"
          src="/img/github.svg"
          alt="iphone"
          border="0"
          height="20"
        />
      </OutboundLink>
    </section>
  );
};

export default Social;
