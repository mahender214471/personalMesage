const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
module.exports = async (app) => {
  // for parse json
  app.use(express.json({ limit: "200mb" }));
  app.use(express.urlencoded({ limit: "200mb", extended: true }));
  app.use (express.static('src'))
  // for inable cors ;
  app.use(cors());
  // for set views engine
  app.set("view engine", "hbs");
  app.set("views", `${process.cwd()}/pages`);
  // for parse file
  app.use(
    fileUpload({
      limits: { fileSize: 50 * 1024 * 1024 },
      useTempFiles: true,
    })
  );
};
