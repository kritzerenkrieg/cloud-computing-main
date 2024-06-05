import FBApp from '/src/database'

const getprofilemodel = async (email)=>{
    var users = FBApp.collection("users");
    var dbemail = users.doc(email)
    var returnedData
    await dbemail.get().then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          // Get the document data
          returnedData = doc.data();
        }
      })
    return returnedData
}

