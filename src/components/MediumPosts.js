/* global MediumWidget:true */

import React from 'react';


class MediumArticles extends React.Component {
  componentDidMount() {
    MediumWidget.Init({
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

  render() {
    return (
    <section class="MediumPostsContainer">
        <h1>Check our latest news</h1>
        <div id="articles">
            <div id="medium-widget"></div>
            <script src="https://medium-widget.pixelpoint.io/widget.js"></script>
        </div>
    </section>
    );
  }
}

export default MediumPosts;