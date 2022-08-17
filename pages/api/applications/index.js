import { MongoClient } from 'mongodb';

const handler = async (req, res) => {

    if (req.method === 'POST') {
        const { jobId, firstName, lastName, email,  telephone, dob, postcode, livedInUK, niNumber, unemployed, studying } = req.body;

        const application = {
            jobId,
            firstName,
            lastName,
            email,
            telephone,
            dob,
            postcode,
            livedInUK,
            niNumber,
            unemployed,
            studying
        }

        const client = await MongoClient.connect('mongodb+srv://liam:imray4672920110917000548@jobhub.1eizs69.mongodb.net/?retryWrites=true&w=majority',
        );

        const db = client.db();

        await db.collection('applications').insertOne(application);

        res.json({message: 'Your application has been successfully submitted!'});
    }

}

export default handler;