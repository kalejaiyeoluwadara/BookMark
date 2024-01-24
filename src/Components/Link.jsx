import React from "react";

function Link({ link, name, special }) {
  return <a href={link}>{name}</a>;
}

export default Link;
