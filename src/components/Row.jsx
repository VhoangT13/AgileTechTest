import styles from "../styles/row.module.css";

const Row = ({ id, title, postId, description, tags, handleDelete }) => {
  const deletePost = (id) => {
    handleDelete(id);
  };

  return (
    <div className={styles.row}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
      <div className={styles.tags}>
        {tags?.map((tag, i) => (
          <span key={i}>
            {tag} {i < tags?.length - 1 ? "," : ""}
          </span>
        ))}
      </div>
      <div className={styles.actions}>
        <button className={styles.btn}>
          <img src="/assets/images/icon-edit.svg" alt="edit icon" />
        </button>
        <button onClick={() => deletePost(postId)} className={styles.btn}>
          <img src="/assets/images/icon-del.svg" alt="delete icon" />
        </button>
      </div>
    </div>
  );
};

export default Row;
