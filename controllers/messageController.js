const axios = require('axios');

const getMessage = async (req,res) => {
    try {
        // Used a public api to generate random messages
        const {data }= await axios.get('https://api.quotable.io/quotes/random');
        const message = data[0].content;
        console.log(message);

        // Respond with a JSON object containing the message and a HTTP status code of 200.
        return res.status(200).json({message: message});
    } 
    catch (error) {
        console.error(error);

        return res.status(401).json({message:error.message, statusC : "not authorized"});
    }
}

module.exports = {getMessage};
