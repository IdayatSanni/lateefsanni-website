import React from "react";

export default function Publication({ publication }) {
  if (!publication) {
    return <div>Publication not found.</div>;
  }

  return (
    <div className='publication'>
      <h3 className='publication-title'>{publication.journal}</h3>
      <p className='publication-text'>{publication.title}</p>
    </div>
  );
}
