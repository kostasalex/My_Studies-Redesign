import styles from './Card.module.css';

const Card = ({ image, title }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <h2 >{title}</h2>
        </div>
    );
};

export default Card;
