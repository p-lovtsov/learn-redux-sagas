import React from "react";
import './Post.css';

export const Post = ({ post }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p>{post.body}</p>
    </div>
  </div>
);
