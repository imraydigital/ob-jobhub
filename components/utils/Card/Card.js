import React from 'react'
//CSS
import styles from './Card.module.css';
//Components
import CardBanner from './CardBanner';
import CardInfo from './CardInfo';

const Card = ({ banner, text, image, title, key}) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(/images/${image})` }} key={key}>
      <div className={styles.card__bg} >
        {banner && <CardBanner text={text} />}
      </div>
      <CardInfo title={title}/>
    </div>
  )
}

export default Card