const generateContent = require('../services/ai.service'); 

async function getReview(req, res) {
    try {
        const { code } = req.body;
        if (!code) {
            return res.status(400).send({ error: "Prompt is required" });
        }
        
        const review = await generateContent(code);
        console.log(review)
        return res.status(200).send(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getReview };
