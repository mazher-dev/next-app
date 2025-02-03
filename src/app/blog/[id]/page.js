"use client";
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const { id } = useParams(); // Get the dynamic blog ID from the URL

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is a blog post with ID: {id}</p>
    </div>
  );
}
