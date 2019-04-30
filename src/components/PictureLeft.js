import React from 'react';

const PictureLeft = (props) => {
  return (

<section className="sectionComponentRight">
<span className="columnText">
    <span className="rightContentText">
        <h1 className="sectionTitle">{ props.title }</h1>
        <h2 className="sectionSub">{ props.subtitle }</h2>
    </span>
</span>
<span className="sectionPicture"><img className="supportPicture" src={ props.url } alt="iphone" border="0"
        loading="lazy"></img></span>
</section>

);
}


export default PictureLeft;