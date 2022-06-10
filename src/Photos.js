import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos.length > 0) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 justify-items-center" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section>
        Sorry, your search term is too magical to be captured in a photo ✨
      </section>
    );
  }
}
