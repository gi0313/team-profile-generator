const fs = require('fs');

// create html file
function writeFile(destination, text){
    return new Promise((resolve, reject)=>{
      fs.writeFile(destination, text, err =>{
        if(err){
          reject(err)
          return
        }
        resolve({
          ok: true,
          message: `File created! Check the dist folder!`
        })
      })
    })
}

module.exports = { writeFile };