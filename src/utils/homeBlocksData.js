import { first } from 'underscore';
import PrismicDOM from 'prismic-dom';

export default data => {
  const title = data.title && first(data.title) ? first(data.title).text : '';
  const subtitle = PrismicDOM.RichText.asHtml(data.subtitle);
  const details = PrismicDOM.RichText.asHtml(data.details);
  const image = data.featured_image.url;
  const buttonText =
    data.button_text && first(data.button_text)
      ? first(data.button_text).text
      : 'View All';
  const buttonUrl = data.button_url.url;

  return { title, subtitle, details, image, buttonText, buttonUrl };
};

// Usage
// import homeBlocksData from '../config/homeBlocksData';
// const { title } = homeBlocksData(data);
