import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card(props) {
  // export default function Card({name, status, species, gender, origin, image, onClose}) {
  const { name, id, status, species, gender, origin, image, onClose } = props;

  return (
    <div className={styles.wrapperCard}>
      <button
        className={styles.btn}
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <img src={image} alt="character" />
      <div className={styles.wrapperText}>
        <Link strict to={`detail/${id}`}>
          <h1 className={styles.name}>{name}</h1>
        </Link>
        <div className={styles.details}>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin.name}</h2>
        </div>
      </div>
    </div>
  );
}