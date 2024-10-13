import React from "react";
import css from "../stylesheets/publicationsComp.css";

const publications = [
  {
    "title": "Leaf Edge Detection Using Machine Learning",
    "date": "August 2023",
    "journal": "2023 International Conference on Emerging Trends in Networks and Computer Communications (ETNCC)",
    "authors": ["Samridh Srivastava", "John Doe", "Jane Smith"],
    "link": "https://ieeexplore.ieee.org/document/10284977",
    "description": "This paper reviews and compares various segmentation techniques for leaf lesion detection, finding Canny with Otsu thresholding to be the most effective across different noise levels."
  },
  
];

const PublicationsComp = () => {
  return (
    <div>
      <h3 className="title">Publications 📚<br /><span className="subtitle">(Research Papers I’ve Contributed To)</span></h3>
      <div className="container">
        {publications.map((publication, index) => (
          <a className="publicationLink" href={publication.link} key={index} target="_blank" rel="noopener noreferrer">
            <div className="publicationBox">
              <div className="publicationTitle">
                <h5 className="publicationTitleText">{publication.title}</h5>
              </div>
              <p className="journal">{publication.journal}</p>
              <p className="date">{publication.date}</p>
              <div className="publicationAuthors">
                <p className="authors">By: {publication.authors.join(", ")}</p>
              </div>
              <div className="publicationDescription">
                <p className="publicationDescriptionContent">{publication.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PublicationsComp;
