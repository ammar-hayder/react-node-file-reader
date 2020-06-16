import React, { useState } from "react";
import DataTable from "react-data-table-component";
import {toast} from "react-toastify";
import _ from 'lodash';

import UploadService from "../services/FileUploadService.js";

import ProgressComponent from "../components/shared/ProgressComponent";
import  useInputComponent from '../components/shared/UseInputComponent';

const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [fileInfos, setFileInfos] = useState([]);
  const [columns, setColumns] = useState([]);
  
  const [delimiter, delimiterInput] = useInputComponent({ type: "text" });
  const [rows, rowsInput] = useInputComponent({ type: "number" });

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    UploadService.upload({currentFile, rows, delimiter}, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
    .then((response) => {
      toast.success("File has been succssfully uploaded.!", {
        autoClose: 3000,
      });
      setCurrentFile(undefined);
      return response;
    })
    .then((files) => {
      let columnName = Object.keys(files.data[0]);
      let columns = columnName.map((e) => {
        return { name: e, selector: e };
      });
      setColumns(columns);
      setFileInfos(files.data);
    })
    .catch(() => {
      setProgress(0);
      toast.error("Technical error! Please try after some time.", {
        autoClose: 3000,
      });
      setCurrentFile(undefined);
    });
  };
 
  return (
    <div>
      {currentFile && <ProgressComponent progress={progress} />}
      <div className="form-inline">
        <div className="form-group mb-2">
          <label htmlFor="inputPassword2">Delimiter : </label>
          {delimiterInput}
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2">Rows :</label>
          {rowsInput}
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2">Select CSV File :</label>
          <input type="file" onChange={selectFile} accept=".csv" />
        </div>
        <button className="btn btn-primary mb-2" onClick={upload}>
          Upload
        </button>
      </div>
      {!_.isEmpty(fileInfos) && (
        <DataTable
          title="Uploaded Data"
          columns={columns}
          data={fileInfos}
          pagination={true}
        />
      )}
    </div>
  );
};


export default UploadFiles;
