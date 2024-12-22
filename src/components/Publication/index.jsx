import React from "react";

export default function Publication({ publication }) {
  if (!publication) {
    return <div>Publication not found.</div>;
  }

  return (
    <div className='publication'>
      <h3>{publication.journal}</h3>
      <p>{publication.title}</p>
      
    </div>
  );
}
