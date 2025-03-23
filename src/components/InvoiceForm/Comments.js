import React from "react";
import { Field } from "formik";
import "./Comments.css";

const Comments = () => {
  return (
    <div className="comments-section">
      <div className="section-header">
        <div className="section-icon">
          <i className="fas fa-comments"></i>
        </div>
        <h2>Comments</h2>
      </div>

      <div className="section-content">
        <div className="comment-input">
          <Field
            as="textarea"
            name="comments"
            placeholder="Add a comment and use @name to mention someone..."
            rows="3"
          />
          <button type="button" className="send-button">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>

        <div className="comments-list">
          {/* Comments will be displayed here */}
          <div className="no-comments">No comments yet</div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
