import React from 'react';

const PictureFull = (props) => {
  return (


    <section className={ props.class }>
        <span className="singleColumnText">
            <span className="centerContentText">
                <h1 className="sectionTitle">{ props.title }</h1>
                <h2 className="sectionSub">{ props.subtitle }</h2>
            </span>
        </span>
        <a className="wlButton reduceMargin" href="#">Preorder</a> 

    </section>

);
}


export default PictureFull;