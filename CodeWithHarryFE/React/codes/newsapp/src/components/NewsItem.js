import React, { Component } from "react";

export class NewsItem extends Component {

  
  render() {

    let {title, description, imageUrl, newsUrl, author, date, source, category}=this.props;

    let badgeColor={
      "general":"orange",
      "business":"blue",
      "entertainment":"red",
      "health":"blue",
      "science":"green",
      "sports":"red",
      "technology":"orange",
    }
    console.log("category:",category);
    console.log("badgeColor[category]",badgeColor[category]);

    return (
      <div className="my-3">
        
        {/* Bootstrap card */}
        {/* <div className="card" style={{ width: "18rem" }}> */}
        <div className="card">
        {/* Bootstrap badge */}
        {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"  */}
        <span className="position-absolute top-0 translate-middle badge rounded-pill" 
        style={{left: "85%", zIndex:"1", backgroundColor:`${badgeColor[category]}`}}>
          {source}
        </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...
              {/* Card title */}
              <span className="badge text-bg-secondary">New</span>
              </h5>
            <p className="card-text">{description}...
              {/* Some quick example text to build on the card title and make up the
              bulk of the card's content. */}
            </p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on 
              {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">
              Read More
              {/* Go somewhere */}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
