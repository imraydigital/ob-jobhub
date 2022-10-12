import { MongoClient, ObjectId } from 'mongodb';

const handler = async (req, res) => {


    if (req.method === 'DELETE') {
        const client = await MongoClient.connect('mongodb+srv://liam:imray4672920110917000548@jobhub.1eizs69.mongodb.net/?retryWrites=true&w=majority',
        );
        const db = client.db();
        const application = await db.collection('applications').findOneAndDelete({'_id': ObjectId(req.query.applicationId)});
        client.close();
        return res.json(application);
    }

}

export default handler;