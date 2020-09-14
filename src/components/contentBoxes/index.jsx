import React from "react";
import PropTypes from "prop-types";
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
  image_source: PropTypes.string,
  text_content: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ContentBox;
