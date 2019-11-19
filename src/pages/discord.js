import React from 'react';
import Seo from '../components/Seo';

class Discord extends React.Component {
  componentDidMount() {
    window.location.replace('https://discord.gg/QHBTnpt');
  }

  render() {
    return (
      <Seo
        title={config.titleDiscord}
        description={config.DiscordDescription}
        url={`${config.siteUrl}`}
        image={config.image}
      >
        <h1>Redirecting to discord...</h1>
      </Seo>
    );
  }
}

export default Discord;
