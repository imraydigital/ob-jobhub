import { MongoClient } from 'mongodb';

const handler = async (req, res) => {

    if (req.method === 'GET') {
        const client = await MongoClient.connect('mongodb+srv://liam:imray4672920110917000548@jobhub.1eizs69.mongodb.net/?retryWrites=true&w=majority',
        );
        const db = client.db();
        const jobs = await db.collection('jobs').find().toArray();
        res.json(jobs);
        client.close();
    }

    if (req.method === 'POST') {

        const { jobTitle, category, description, details, location, tags, image, salary } = req.body;

        const jobData = {
            jobTitle,
            category,
            description,
            details,
            location,
            tags,
            image,
            salary
        }

        const client = await MongoClient.connect('mongodb+srv://liam:imray4672920110917000548@jobhub.1eizs69.mongodb.net/?retryWrites=true&w=majority',
        );

        const db = client.db();

        await db.collection('jobs').insertOne(jobData);

        res.json(jobData);

    }

}

export default handler;