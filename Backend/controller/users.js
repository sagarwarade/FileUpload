const sql=require('mssql');
const logger = require('../helper/logger');
const response=require('../response/index');
const config=require('../config/config');
const urlencode = require('urlencode');
const fs_new=require('fs-extra');
const path= require('path');
const fs=require('fs');


//Upload File
exports.postUploadImage=(req, res)=>{
    (async function addImageDetails(){
        try{
           // console.log(req);
            console.log(req.body);
            //console.log(req)
            var file = req.files.file;
            var tmp_path=file.path;
            console.log(tmp_path)
           var filename=file.name;
           console.log(filename)
            var target_path = './Images/' +filename ;
            fs_new.move(tmp_path, target_path, (err) => {
                if (err) {
                    console.log(err);
                    res.json(response.err("File already exist"));
                }
                else{
                    console.log('file moved successfully');
              
                    const ImageTitle=req.body.ImageTitle;
                   
                    const filename=req.files.file.name;
                    console.log(req.files.file.name);
                    

                new sql.Request()
                    .input('ImageTitle',sql.NVarChar(1000),ImageTitle)
                    .input('Filename',sql.NVarChar(1000),filename,{nullable: true})
                    .execute('SpImageUploadDetails');
                    res.json(response.success(null,"image Details Saved"));
            }
      })
    }
    catch (error) {
            logger.error('Error while adding Image details'+error);
           }
    }());


};

exports.FileUploadExample=(req, res,next) => {
    (async function addImageDetails(){
        try{
            
            console.log("Hello");
                  
            console.log(req.body);
            const file = req.file.file;
            const filename=file.name;
            console.log(filename);
            //console.log(file.filename);
            if (!file) {
              const error = new Error('No File is selected')
              error.httpStatusCode = 400
              return next(error)
            }
            else{
                res.send(file);
            const ImageTitle=req.body.ImageTitle;
            const filename=req.files.file.name;
            new sql.Request()
                          .input('ImageTitle',sql.NVarChar(1000),ImageTitle)
                          .input('Filename',sql.NVarChar(1000),filename,{nullable: true})
                          .execute('SpImageUploadDetails');
                          res.json(response.success(null,"image Details Saved"));
                        
                    }
                  }
                  catch (error) {
                          logger.error('Error while adding Image details'+error);
                         }
                  }());
              
              
              };
              
