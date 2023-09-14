/*●	Lehessen lekérdezni az összes felhasználót a rendszerből*/


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




const main = async () =>{
try{
    await connectToDatabase();
    

const query = {}; 
const result = await accountCollection.find(query).toArray();


result.forEach((doc) => console.log(doc.username));
console.log('Found ' + result.length + ' document(s)');

} catch (err){
    console.error('Error show every costumer: '+ err);
} finally{
    await client.close();
}

}

main(); 
