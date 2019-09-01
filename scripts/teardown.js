//Dirty dirty globals
const fs = require("fs");
const config = require("./config.json");
const directoryPath = config.exec_area_path;
const resourcesPath = config.resources_path;

//This is a function. Suteki Da Ne?
async function deleteFilesInDirectory( path ){
  return await new Promise( ( resolve, reject ) => {
    fs.readdir( path, async ( err, files ) => {
      console.log( files );
      const filesArray = files ? [...files] : [];

      const deleteFilesPromises = filesArray.map( fileName => {
        return new Promise( ( resolve, reject ) => {
          //Now delete the file
          fs.unlink(`${path}/${fileName}`, ( err ) => {
            if(err){ 
              console.log( err );
              resolve( false );
            }
            else{
              resolve( true );
            }
          });
        });
      });

      const allFilesPromise = Promise.all( deleteFilesPromises );

      resolve( await allFilesPromise );
    });
  });
}

async function deleteDirectory( path ){
  return await new Promise( ( resolve, reject ) => {
    //Remove the directory
    fs.rmdir( directoryPath, ( err ) => {
      if(err){
        console.log("Error");
        console.log(err);
        resolve( false );
      }
      else{
        resolve( true );
      }
    });
  });
};

async function teardown( path ){
  const deleteFilesResult = await deleteFilesInDirectory( directoryPath );
  console.log( deleteFilesResult );

  const result = await deleteDirectory( path ); 
  console.log( `Directory result : ${result}` );

  return result;
};

(async () => {
  
  await teardown(); 

})();
