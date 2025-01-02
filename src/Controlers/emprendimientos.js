const axios = require('axios');

const apiKey = process.env.API_KEY;
const url = process.env.URL_EMPRENDIMIENTOS;

//trae emprendimientos
const getEmprendimientos = async(req, res) => {
    
    try { 
        const resp = await axios.get(`${url}&limit=${10}&offset=${0}&key=${apiKey}`);
        
        return res.json(resp.data);
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getEmprendimientos };