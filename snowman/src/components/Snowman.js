import React from 'react';
import BodyBottom from '../images/bodybottom.svg';
import BodyMiddle from '../images/bodymiddle.svg';
import Arms from '../images/arms.svg';
import Head from '../images/head.svg';
import Clothes from '../images/clothes.svg';
import Face from '../images/face.svg';

const allSnowmanParts = [
  BodyBottom,
  BodyMiddle,
  Head,
  Arms,
  Clothes,
  Face
]

const Snowman = ({mistakes}) => {
  
  let showSnowmanParts = [];

  for (let i = 0; i < mistakes && i < allSnowmanParts.length; i++){
    showSnowmanParts.push(
      <div key={i} className="bodypart">
        <img alt="" width="100%" height="100%" src={allSnowmanParts[i]} />
      </div>
    );
  }

  return (
    <>
      {showSnowmanParts}
    </>
  );

}

export default Snowman;