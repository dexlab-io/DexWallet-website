import React from 'react';

class Discord extends React.Component {
  componentDidMount() {
    window.location.replace('https://discord.gg/QHBTnpt');
  }

  render() {
    return <p>Redirecting to discord...</p>;
  }
}

export default Discord;
