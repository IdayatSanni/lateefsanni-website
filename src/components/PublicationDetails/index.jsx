import React from "react";
import { useLocation } from "react-router-dom";

function PublicationDetail() {
  const location = useLocation();
  const { publication } = location.state || {}; // Extract the publication object from state

  if (!publication) {
    return <div>Publication not found.</div>;
  }

  return (
    <div>
      <h2>{publication.title}</h2>
      <p>
        <strong>Contributor:</strong> {publication.contributor}
      </p>
      <p>
        <strong>Year:</strong> {publication.year}
      </p>
      <p>
        <strong>Journal:</strong> {publication.journal}
      </p>

      {publication.link && publication.link.length > 0 && (
        <a href={publication.link} target='_blank' rel='noopener noreferrer'>
          View link
        </a>
      )}
    </div>
  );
}

export default PublicationDetail;
