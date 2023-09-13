
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

const documentstoFind= {balace:{$gt: 4700}} //FIND use

const main = async () =>{
try{
    await connectToDatabase();
    let result= accountCollection.find(documentstoFind)
    let doCount =accountCollection.countDocuments(documentstoFind)
    
     await result.forEach((doc)=> console.log(doc))
     console.log('Found '+await doCount+' document')
} catch (err){
    console.error('Error connecting to the database: '+ err);
} finally{
    await client.close();
}

}

main(); 
