import React from "react";

const listItem = props => {
  const listItems = props.items;
  const items = listItems.map((item, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-header">{item.title}</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            className={
              item.position === "right" ? "btn btn-primary" : "btn btn-info"
            }
            onClick={()=>props.switchPosition(item)}
          >
            Go {item.position === "right" ? "left" : "right"}
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="card">
      <h5 className="card-header">ListItemTitle</h5>
      <div className="card-body">
        <ul className="list-group">{items}</ul>
      </div>
    </div>
  );
};
export default listItem;
