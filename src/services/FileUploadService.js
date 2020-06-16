import axiosService from "./AxiosService";
const { apiService } = axiosService;

const upload = (uploadData, onUploadProgress) => {  
    console.log(uploadData);
  let formData = new FormData();

  formData.append("file", uploadData.currentFile);
  formData.append("delimiter", uploadData.delimiter);
  formData.append("rows", uploadData.rows);

  return apiService.post("/file-upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};
export default {
  upload,
};
