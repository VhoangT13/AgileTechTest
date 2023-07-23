import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

import Row from "../components/Row";
import Sidebar from "../components/Sidebar";
import Button from "../components/UI/Button";
import styles from "../styles/profile.module.css";
import Form from "../components/Form";

const ProfilePage = () => {
  const { accessToken, logout } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [title, setTitle] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [tags, setTags] = useState([]);
  // State to control modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // getPost
  useEffect(() => {
    const fetchPost = async (page, title, tags) => {
      try {
        let url = `https://test-react.agiletech.vn/posts?page=${page}`;
        if (title) url += `&title=${title}`;
        if (tags) url += `&tags=${tags}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts);
          setTotalPages(data["total_page"]);
        } else {
          console.error("Error fetching posts:", response.status);
          // If the API call fails due to an invalid token, log the user out
          logout();
        }
      } catch (e) {
        console.error("Error fetching posts:", e);
      }
    };
    fetchPost(currentPage, title, selectedTag);
  }, [title, currentPage, selectedTag, accessToken, logout]);
  // get Tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(
          "https://test-react.agiletech.vn/posts/tags",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setTags(data);
        } else {
          console.log("Error when fetch tags");
        }
      } catch (e) {
        console.log("Error", e.message);
      }
    };
    fetchTags();
  }, [accessToken, logout]);

  // Pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  // Delete post
  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(
        `https://test-react.agiletech.vn/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        // Update the posts after successful deletion
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      } else {
        console.error("Error deleting post:", response.status);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.top}>
          <Button
            onClick={() => setModalOpen(true)}
            type={"button"}
            className={styles.add}
          >
            Add new
          </Button>
          <Form
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            tags={tags}
          />
          <div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <select onChange={(e) => setSelectedTag(e.target.value)}>
              <option value={""}>Tags</option>
              {tags.map((tag, i) => (
                <option key={i} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className={styles.heading}>
            <p>ID</p>
            <p>Title</p>
            <p>Description</p>
            <p>Tags</p>
            <p>Actions</p>
          </div>
          {/* table body */}
          <div className={styles.body}>
            {posts?.map((post, index) => (
              <Row
                id={index + 1}
                postId={post.id}
                key={post.id}
                tags={post.tags}
                title={post.title}
                description={post.description}
                handleDelete={handleDeletePost}
              />
            ))}
          </div>
        </div>
        <div className={styles.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
