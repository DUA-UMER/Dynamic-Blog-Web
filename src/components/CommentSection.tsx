
'use client';

import { useState } from 'react';
import styles from './CommentSection.module.css';

interface Comment {
  text: string;
  hidden: boolean;
  likes: number;
  dislikes: number;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { text: newComment, hidden: false, likes: 0, dislikes: 0 },
      ]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const handleToggleHideComment = (index: number) => {
    setComments(
      comments.map((comment, i) =>
        i === index ? { ...comment, hidden: !comment.hidden } : comment
      )
    );
  };

  const handleLikeComment = (index: number) => {
    setComments(
      comments.map((comment, i) =>
        i === index ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleDislikeComment = (index: number) => {
    setComments(
      comments.map((comment, i) =>
        i === index ? { ...comment, dislikes: comment.dislikes + 1 } : comment
      )
    );
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Comments</h3>

      <ul className={styles.commentList}>
        {comments.map((comment, index) => (
          <li key={index} className={styles.comment}>
            <span className={styles.commentText}>
              {comment.hidden ? 'Comment is hidden' : comment.text}
            </span>
            <div className={styles.actions}>
              <div className={styles.likeDislike}>
                <button
                  className={styles.likeButton}
                  onClick={() => handleLikeComment(index)}
                >
                  👍 {comment.likes}
                </button>
                <button
                  className={styles.dislikeButton}
                  onClick={() => handleDislikeComment(index)}
                >
                  👎 {comment.dislikes}
                </button>
              </div>
              <div className={styles.commentActions}>
                <button
                  className={styles.button}
                  onClick={() => handleToggleHideComment(index)}
                >
                  {comment.hidden ? 'Unhide' : 'Hide'}
                </button>
                <button
                  className={styles.button}
                  onClick={() => handleDeleteComment(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
        className={styles.inputField}
      />
      <button onClick={handleAddComment} className={styles.submitButton}>
        Submit
      </button>
    </div>
  );
};

export default CommentSection;




