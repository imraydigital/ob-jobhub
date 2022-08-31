const handler = async (req, res) => {
    if(req.method === 'GET'){
        res.json({
            pw1: 1, 
            pw2: 0, 
            pw3: 2, 
            pw4: 1 
        })
    }
}

export default handler;