var promise = new Promise(function(resolve, reject) {
    const x = "swati";
    const y = "swati"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
    
  promise.
      then(function () {
          console.log('Success, You are a done');
      }).
      catch(function () {
          console.log('Some error has occured');
      });
  