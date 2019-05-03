import React from 'react';

class MediumArticles extends React.Component {
  componentDidMount() {
    if (window) {
      window.MediumWidget.Init({
        renderTo: '#medium-widget',
        params: {
          resource: 'https://medium.com/dexlab-io',
          postsPerLine: 3,
          limit: 3,
          picture: 'big',
          fields: ['description'],
          ratio: 'landscape',
        },
      });
    }
  }

  render() {
    return (
      <section className="MediumPostsContainer">
        <h1>Check our latest news</h1>
        <div id="articles">
          <div id="medium-widget" />
          <script src="https://medium-widget.pixelpoint.io/widget.js" />
        </div>
      </section>
    );
  }
}

export default MediumArticles;
