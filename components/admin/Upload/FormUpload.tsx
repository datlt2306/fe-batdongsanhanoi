import React from "react";
import { BsUpload } from "react-icons/bs";
const FormUpload = ({ handleFileInputChange, selectedFiles, loading }: any) => {
  return (
    <>
      <div>
        <div
          className={`${
            selectedFiles?.length ? "hidden" : "flex justify-center"
          }`}
        >
          <input
            type="file"
            className="hidden"
            id="fileInput"
            onChange={handleFileInputChange}
            multiple
          />
          <label
            className="flex text-center items-center  text-[#494d50] bg-[#eff0f0] pl-4 pr-4 pt-2 pb-2 text-[14px] rounded-[9px] border-solid hover:bg-[#e5e5e5]"
            htmlFor="fileInput"
          >
            <div className="pr-3">
              <BsUpload />
            </div>
            {loading ? "Uploading . . ." : "Upload files"}
          </label>
        </div>
      </div>
    </>
  );
};

export default FormUpload;
