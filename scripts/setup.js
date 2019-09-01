//Dirty dirty globals
const fs = require("fs");
const config = require("./config.json");
const directoryPath = config.exec_area_path;
const resourcesPath = config.resources_path;

/*
  Returns whether or not the directory was created
*/
async function createExecArea(){

  return await new Promise( ( resolve, reject ) => {
    fs.mkdir( directoryPath, ( err ) => {

      const output = ( err ) ? err.message : "No error";
      console.log( output );

      const didCreateDirectory = ( err ) ? true : false;
      resolve( didCreateDirectory );
    });
  });
};

/*
  returns:
    { bool } - whether or not the files were created anew
*/
async function setupExecAreaFiles(){

  return await new Promise( ( resolve, reject ) => {
    fs.readdir( resourcesPath, async ( err, files ) => {
      if( err ){
        console.log( err );
        resolve( false );
      };

      if( files ){

        const copyFilePromises = [...files].map( fileName => {
          return new Promise( ( resolve, reject ) => {
            console.log(`fileName : ${ fileName }`);
            const source = `${resourcesPath}/${fileName}`;
            const destination = `${directoryPath}/${fileName}`;
            const configs = fs.constants.COPYFILE_EXCL;
            fs.copyFile( source, destination, configs, ( err ) => { 
              console.log("Error");
              console.log(err);
              resolve( err ? false : true );
            });
          });
        });

        const result = await Promise.all( copyFilePromises );
        console.log(result);
      };
    });
  });
};

(async () => { 

  await createExecArea();
  await setupExecAreaFiles();

  process.exit(1);

})();
