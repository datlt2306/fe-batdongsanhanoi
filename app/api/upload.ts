import axios from "axios";

import crypto from "crypto";

const generateSHA1 = (data: any) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};

const generateSignature = (publicId: string, API_SECRET: string) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${API_SECRET}`;
};

const CLOUD_NAME = "ddu7xygjs";
const PRESET_NAME = "ECMA-SCRIP";
const FOLDER_NAME = "portfolio";
const API_KEY = "793344825182585";
const API_SECRET = "tcnPdIAlcir7rK3usVTJx54NLJs";
export const upLoadFiles = async (ArrayFiles: any) => {
  if (ArrayFiles) {
    const urls: Array<Object> = [];
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const files: any = Object.values(ArrayFiles);
    for (var i = 0; i < files.length; i++) {
      const formDataFL = new FormData();
      formDataFL.append("upload_preset", PRESET_NAME);
      formDataFL.append("folder", FOLDER_NAME);
      formDataFL.append("file", files[i]);
      const response = await axios.post(api, formDataFL, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      urls.push({
        public_id: response?.data.public_id,
        image_url: response?.data.secure_url,
      });
    }
    return urls;
  }
};

export const DeleteImage = async (publicId: any) => {
  const timestamp = new Date().getTime();
  const signature = generateSHA1(generateSignature(publicId, API_SECRET));
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`;
  try {
    const response = await axios.post(url, {
      public_id: publicId,
      signature: signature,
      api_key: API_KEY,
      timestamp: timestamp,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
