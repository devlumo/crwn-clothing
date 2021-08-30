import React from "react";
import "./MenuItem.styles.scss";
import { withRouter } from "react-router";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

// withRouter returns a new component with the routes properties available (match, location, history)
// so we do not have to push them down as other properties
export default withRouter(MenuItem);
