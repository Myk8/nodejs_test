
const {MongoClient, ObjectId }=require('mongodb')
const uri = require('./atlas_uri')

console.log(uri)

const client = new MongoClient(uri)
const dbname = "Mybase"
const collection_name="account"



const accountCollection =client.db(dbname).collection(collection_name)


// Connect to the database
const connectToDatabase = async () => {
try{
    await client.connect();
    console.log('Connected to the '+ dbname +'database');
}catch (err){
    console.error('Error connecting to the database:'+err);
}
};



//insertmany method()
 sampleAccounts = [{
  account_id:"MDB011234813",
  account_holder: "Ada Lovelace",
  account_type: "checking",
  balace: 60218,
},
{
    account_id:"MDB829000001",
    account_holder: "Muhammad ibn Musa al-Khwarizmi",
    account_type: "savings",
    balace: 267914249,
},
]


const main = async () =>{
try{
    await connectToDatabase();

 let result= await accountCollection.insertMany(sampleAccounts)  //replace                                
 console.log('Inserted'+result.insertedCount+' documents')   //replace
console.log(result)  // many
} catch (err){
    console.error('Error connecting to the database: '+ err);
} finally{
    await client.close();
}

}

main(); 
