
const {MongoClient, ObjectId }=require('mongodb')
const uri = require('./atlas_uri')

console.log(uri)

const client = new MongoClient(uri)
const dbname = "Mybase"

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
 

const main = async () =>{
try{
    await connectToDatabase();
} catch (err){
    console.error('Error connecting to the database: '+ err);
} finally{
    await client.close();
}

}

main(); 
