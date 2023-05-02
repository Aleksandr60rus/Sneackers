import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
const Card = ({
  id,
  imageUrl,
  title,
  price,
  onFavorite,
  onPlus,
  favorite = false,
  added = false,
  loading = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorite);
  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, price });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <div className={styles.card}>
        {loading ? (
          <ContentLoader
            speed={2}
            width={155}
            height={250}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="1" y="-0" rx="10" ry="10" width="155" height="155" />
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>
        ) : (
          <>
            <div className={styles.favorite}>
              <img
                onClick={onClickFavorite}
                width={30}
                height={30}
                src={isFavorite ? "/img/like.png" : "/img/unlike.png"}
                alt="unlike"
              />
            </div>
            <img width="100%" height={135} src={imageUrl} alt="Cart" />
            <h5>{title}</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена</span>
                <b>{price}руб.</b>
              </div>
              <img
                onClick={onClickPlus}
                className={styles.plus}
                width={20}
                height={20}
                src={isAdded ? "/img/btn-checked.png" : "/img/btn-plus.png"}
                alt="Plus"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
