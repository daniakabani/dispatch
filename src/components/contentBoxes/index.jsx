import React from "react";
import PropTypes from "prop-types";
import ContentBoxStyle from "./ContentBox.style";

const ContentBox = props => {
  const {image_source, text_content} = props;
  return (
    <ContentBoxStyle>
      <div className="DA-content-box-wrapper">
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

ContentBox.prototype = {
  image_source: PropTypes.string,
  text_content: PropTypes.string.isRequired
};

export default ContentBox;
