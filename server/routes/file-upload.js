const express = require("express");
const router = express.Router();
var fs = require("fs");
var parse = require("csv-parser");
const fileUpload = require("express-fileupload");

router.post("", fileUpload(),  (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let sampleFile = req.files.file;
  let {delimiter, rows}  = req.body;
  const results = [];
  sampleFile.mv("./server/temp/temp.csv", function (err) {
    if (err) return res.status(500).send(err);
    fs.createReadStream("./server/temp/temp.csv")
      .pipe(parse({ separator: delimiter }))
      .on("data", (data) => {
        if (results.length < rows) results.push(data);
      })
      .on("end", () => {
        res.status(200).send(results);
      });
  });
});

module.exports = router;
