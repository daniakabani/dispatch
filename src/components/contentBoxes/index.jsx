import React from "react";
import propTypes from "prop-types";
import ContentBoxStyle from "./ContentBox.style";
import classNames from "classnames";

const ContentBox = props => {
  const {image_source, text_content, onClick, active} = props;
  const classes = classNames("DA-content-box-wrapper", {
    active
  })
  return (
    <ContentBoxStyle>
      <div className={classes} onClick={onClick} >
        <div className="DA-box-content">
          <figure>
            {image_source && <img src={image_source} alt={text_content}/>}
          </figure>
          <article>
            <p>{text_content}</p>
          </article>
        </div>
      </div>
    </ContentBoxStyle>
  )
};

ContentBox.propTypes = {
  image_source: propTypes.string,
  text_content: propTypes.string.isRequired,
  onClick: propTypes.func
};

export default ContentBox;
