/*●	Lehessen lekérdezni egy adott felhasználót az azonosítója (pl. ObjectId) alapján. */

const {MongoClient,ObjectId }=require('mongodb')
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

const documentsToFind= {_id: new ObjectId("6503190bd005e7e6f3e0fbc2")} //FIND use


const main = async () =>{
    try{
        await connectToDatabase();

        let result= await accountCollection.findOne(documentsToFind)
        console.log("Found one document")
        console.log(result)        
       
    } catch (err){
        console.error('Error showing one person details: '+ err);
    } finally{
        await client.close();
    }
    
    }
    
    main(); 
    