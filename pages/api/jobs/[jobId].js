import { MongoClient, ObjectId } from 'mongodb';

const handler = async (req,res) => {

    if(req.method === 'GET') {
    const client = await MongoClient.connect('mongodb+srv://liam:imray4672920110917000548@jobhub.1eizs69.mongodb.net/?retryWrites=true&w=majority',
    );
    const db = client.db();
    const jobData = await db.collection('jobs').findOne({'_id': ObjectId(req.query.jobId)});
    client.close();
    return res.json(jobData);


    } else if(req.method === 'PUT') {
        //MAKE CONNECTION
        const client = await MongoClient.connect('mongodb+srv://liam:imray4672920110917000548@jobhub.1eizs69.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();

        //GET JOB UPDATE DATA
        const { jobTitle, category, description, details, location, tags, image, salary } = req.body;

        //FIND EXISTING JOB
        
        const existingJobData = await db.collection('jobs').findOne({'_id': ObjectId(req.query.jobId)});

        const updatedData = existingJobData;

        //UPDATE REQUIRED FIELDS
        if(jobTitle) updatedData.jobTitle = jobTitle;
        if(category) updatedData.category = category;
        if(description) updatedData.description = description;
        if(details) updatedData.details = details;
        if(location) updatedData.location = location;
        if(tags) updatedData.tags = tags;
        if(image) updatedData.image = image;
        if(salary) updatedData.salary = salary;

        
        //UPDATE JOB DATA
        const job = await db.collection('jobs').findOneAndUpdate(
            {'_id': ObjectId(req.query.jobId)},
            {
                $set: updatedData
            },
            {
                new: true
            }
        );
        client.close();
        return res.json(job);
    } else if(req.method === 'DELETE') {
         //MAKE CONNECTION
         const client = await MongoClient.connect('mongodb+srv://liam:imray4672920110917000548@jobhub.1eizs69.mongodb.net/?retryWrites=true&w=majority');
         const db = client.db();

         //FIND JOB BY ID AND DELETE
         const job = await db.collection('jobs').findOneAndDelete({'_id': ObjectId(req.query.jobId)});
         client.close();
         return res.json(job);

    }
}

export default handler;