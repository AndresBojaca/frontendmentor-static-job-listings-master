import React, { useEffect } from "react";
import closelogo from "../../assets/images/icon-remove.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  removeallTags,
  removeTag,
  addTag,
} from "../../features/tags/tagsSlice";
import "./SearchCard.css";

function SearchCard(props) {
  const tags = useSelector((state) => state.tags);
  const tagsStorage = localStorage.getItem("tags");
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(tagsStorage)) {
      // Si encontró tags en el storage cambia el estado
      JSON.parse(tagsStorage)?.map((tag) => dispatch(addTag(tag)));
    }
  });

  return (
    <div style={{ width: "100%" }}>
      {
        <div
          className="search__card"
          style={
            tags.length > 0
              ? { opacity: 1, height: "85px" }
              : { opacity: "0", height: "0" }
          }
        >
          <div className="tools-container">
            {tags.map((tool, index) => (
              <div key={index} className="tool">
                <span>{tool}</span>
                <div
                  className="close-btn"
                  onClick={() => dispatch(removeTag(tool))}
                >
                  <img src={closelogo} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="clear-btn" onClick={() => dispatch(removeallTags())}>
            <h1>Clear</h1>
          </div>
        </div>
      }
    </div>
  );
}

export default SearchCard;
