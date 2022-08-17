import { MongoClient, ObjectId } from 'mongodb';

const handler = async (req,res) => {

    const client = await MongoClient.connect('mongodb+srv://liam:imray4672920110917000548@jobhub.1eizs69.mongodb.net/?retryWrites=true&w=majority',
    );
    const db = client.db();
    const jobData = await db.collection('jobs').findOne({'_id': ObjectId(req.query.jobId)});
    console.log(jobData);
    res.json(jobData);
    client.close();
}

export default handler;