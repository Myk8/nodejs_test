/*●	Lehessen új felhasználókat hozzáadni a rendszerhez. 
Minden felhasználónak legalább egy felhasználónév (username) és egy e-mail cím (email) kell rendelkeznie. 
Az e-mail címnek egyedinek kell lennie.*/


const {MongoClient, ObjectId }=require('mongodb')
const uri = require('./atlas_uri')
console.log(uri)

const client = new MongoClient(uri)
const dbname = "Mybase"
const collection_name="account"

const accountCollection =client.db(dbname).collection(collection_name)

const connectToDatabase = async () => {
try{
    await client.connect();
    console.log('Connected to the '+ dbname +'database');
}catch (err){
    console.error('Error connecting to the database:'+err);
}
};


sampleAccounts = [{
  username:"Mikey Mazza",
  email: "mikeymazza0802@gmail.com",
 

  },
  {
    username:"Barta Patrik",
    email: "Liomspager@gmail.com",

  },
  {
    username:"Ben Mazza",
    email: "Tesobro@gmail.com",
  },

  ]


const main = async () =>{
try{
    await connectToDatabase();

    
    let result= await accountCollection.insertMany(sampleAccounts)                                 
 console.log('Inserted '+result.insertedCount+' documents')   
console.log(result)  // many
} catch (err){
    console.error('Error adding documents: '+ err);
} finally{
    await client.close();
}

}

main(); 
