import styles from "./Card.module.css";

const Card = ({ image, title, link }) => {
  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img src={image} alt={title} />
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </a>
      ) : (
        <h2>{title}</h2>
      )}
    </div>
  );
};

export default Card;
