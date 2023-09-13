
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


/*const account = {
    _id : new ObjectId ("6312fa15cecacc1bc12a23"),
    account_id: "MDB955769550",
    account_holder: "Addison Shelton",
    account_type: "checking",
    balance: 1971.89,
    transfers_complete:[
        "TR644995264",
        "TR962476523",
        "TR137596327",
        "TR654782494",
        "TR467021469",
        "TR910368742",
    ],
    address:{
        city: "RIDGEWOOD",
        zip: 11385,
        street: "MENAHAN ST",
        number : 1721,
    },
};  */
 


/* 
 insertOne method()

const sampleAccount ={
    account_holder: "Mazza Mikey",
    account_id: "MBB829001337",
    account_type: "cheking",
    balace: 50352434,
    last_updated: new Date(),
}



 let result= await accountCollection.insertOne(sampleAccount) 
 console.log('Inserted document: '+result.insertedId)  
*/




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

 let result= await accountCollection.insertMany(sampleAccounts)            //replace                                
 console.log('Inserted'+result.insertedCount+' documents')   //replace
console.log(result)
} catch (err){
    console.error('Error connecting to the database: '+ err);
} finally{
    await client.close();
}

}

main(); 
