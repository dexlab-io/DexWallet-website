import React from 'react';
import PropTypes from 'prop-types';
import { MixpanelProvider } from 'gatsby-plugin-mixpanel';

export default class HTML extends React.Component {
  render() {
    return (
      <MixpanelProvider>
        <html {...this.props.htmlAttributes}>
          <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta httpEquiv="cache-control" content="no-cache" />
            <meta httpEquiv="expires" content="0" />
            <meta httpEquiv="pragma" content="no-cache" />
            <meta property="og:title" content="Dexwallet" />
            <meta property="og:description" content="Dexwallet - The mobile wallet for decentralized finance" />
            <meta property="og:image" content="/images/preview.png" />
            <meta property="og:url" content="https://dexwallet.io/">
            <meta name="twitter:title" content="Dexwallet" />           
            <meta property="og:title" content="Dexwallet" />
            <meta name="twitter:description" content="Dexwallet - The mobile wallet for decentralized finance">
            <meta name="twitter:image" content="/images/preview.png">
            <meta name="twitter:card" content="summary_large_image"></meta>
            <title>Dexwallet - The mobile wallet for decentralized finance</title>

            {/* Add custom css or scripts here */}
            <script src="https://medium-widget.pixelpoint.io/widget.js" />
            {/* Add custom css or scripts here */}

            {this.props.headComponents}
          </head>
          <body {...this.props.bodyAttributes}>
            {this.props.preBodyComponents}
            <div
              key="body"
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: this.props.body }}
            />
            {this.props.postBodyComponents}
          </body>
        </html>
      </MixpanelProvider>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
