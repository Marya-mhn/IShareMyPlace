import React from "react";

import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = (props) => {
  const pickImageHandler = () => {};

  return (
    <div className="form-control">
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jpg, png, jpeg"
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          <img src="" alt="Preview" />
        </div>
        <Button type="button" onclick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
    </div>
  );
};
export default ImageUpload;
