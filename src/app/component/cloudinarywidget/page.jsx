"use client";

import { CldUploadWidget } from "next-cloudinary";

const CloudinaryUpload = ({ onUploadSuccess }) => {
  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      onSuccess={(result) => {
        const url = result.info.secure_url;
        onUploadSuccess(url);
      }}
    >
      {({ open }) => (
        <button
          onClick={open}
          type="button"
          className="bg-red-500 p-2 rounded m-4"
        >
          Upload an Image
        </button>
      )}
    </CldUploadWidget>
  );
};

export default CloudinaryUpload;
