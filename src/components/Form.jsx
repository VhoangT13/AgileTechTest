import { useState } from "react";
import styles from "../styles/form.module.css";
const Form = ({ isOpen, onClose, onSubmit, tags }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title: title,
      description: description,
      tags: [selectedTags],
    };
    onSubmit(postData);
    setDescription("");
    setTitle("");
    setSelectedTags("");
  };
  // Handle changes in the tags select

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
      <div className={styles["modal-content"]}>
        <span className={styles["close-button"]} onClick={onClose}>
          &times;
        </span>
        <h2>Add Post</h2>
        <form onSubmit={handleSubmit}>
          {/* Form inputs go here */}
          <label>Title:</label>
          <input
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
          />
          <br />
          <label>Description:</label>
          <textarea
            className={styles.textarea}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <br />
          <label>Tags:</label>
          <select
            className={styles.select}
            onChange={(e) => setSelectedTags(e.target.value)}
          >
            {tags?.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <br />
          {/* ... */}
          <button type="submit">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
