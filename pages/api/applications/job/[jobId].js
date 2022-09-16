import { MongoClient } from 'mongodb';

const handler = async (req, res) => {


    if (req.method === 'GET') {
        const client = await MongoClient.connect('mongodb+srv://liam:imray4672920110917000548@jobhub.1eizs69.mongodb.net/?retryWrites=true&w=majority',
        );
        const db = client.db();
        const jobApplications = await db.collection('applications').find().toArray();
        const filteredApplications = jobApplications.filter((item)=>{
            if(item.jobId === req.query.jobId) {
                return item;
            }
        })
        res.json(filteredApplications);
        client.close();
    }

}

export default handler;