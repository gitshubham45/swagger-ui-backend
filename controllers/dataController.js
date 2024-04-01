const axios = require('axios');
const asyncHandler = require('express-async-handler');

const getData =asyncHandler(async (req, res) => {
    try {
          // Extract limit and category from request body
          const { limit, category } = req.body;

        console.log(req.body);

        // Fetch data from the public API
        const response = await axios.get('https://api.publicapis.org/entries');
        const data = response.data;

        // Implement filtering options based on categories and result limits
        let filteredData = data.entries;

        // Validate limit
        const limitParam = parseInt(limit);
        if (isNaN(limitParam) || limitParam <= 0) {
            return res.status(400).json({ error: 'Invalid limit parameter' });
        }

        // Filter by category if provided
        if (category) {
            filteredData = filteredData.filter(data => data.Category.toLowerCase() === category.toLowerCase());
        }

        // Slice the data based on the limit parameter
        filteredData = filteredData.slice(0, limitParam);

        // Send the filtered data as JSON response
        res.json(filteredData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = {getData};
