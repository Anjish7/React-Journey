import React from "react";

function Card(props) {
  return (
    <div>
      <a href={props.el.url} target="_blank">
        <div className="">
          <div className=" overflow-hidden h-25 w-25 rounded-3xl object-cover">
            <img src={props.el.download_url} className=" h-full w-full" />
          </div>
          <h1>{props.el.author}</h1>
        </div>
      </a>
    </div>
  );
}

export default Card;
