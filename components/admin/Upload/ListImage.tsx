import Image from "next/image";
import React from "react";
import { FiTrash } from "react-icons/fi";

const ListFiles = ({
  selectedFiles,
  setSelectedFiles,
  handleFileInputChange,
  loading,
}: any) => {
  const removeImage = (index: any) => {
    setSelectedFiles((selectedFiles: any) =>
      selectedFiles.filter((_: any, i: any) => i !== index)
    );
  };
  return (
    <>
      {selectedFiles?.length > 0 && (
        <div className=" m-2 text-center">
          {selectedFiles.map((file: any, index: any) => (
            <div
              className="flex  items-center justify-between bg-[#f7f7f8] rounded-[9px] p-3 mt-2 mb-2"
              key={index}
            >
              <div className="flex items-center">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`Selected Image ${index + 1}`}
                  className="rounded-[9px]"
                  width={50}
                  height={50}
                />
                <p className="text-[#84888b] ml-2 text-[14px] truncate">
                  {" "}
                  {file.name}
                </p>
              </div>
              <h2
                className="text-[#aeb1b4] rounded-[9px]  p-2 justify-self-end hover:bg-[#e5e5e5]"
                onClick={() => removeImage(index)}
              >
                <FiTrash />
              </h2>
            </div>
          ))}
          {loading && (
            <div className="text-[#3144ba] font-medium">Loading...</div>
          )}
          <div className="flex items-center justify-center">
            <label
              onClick={() => handleFileInputChange}
              htmlFor="fileInput"
              className="w-full text-[#8b8d8f] pt-3 h-14 text-center rounded-[9px] text-2xl bg-[#f7f7f8] hover:bg-[#e5e5e5]"
              style={{ display: "block", width: "100%" }}
            >
              +
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default ListFiles;
