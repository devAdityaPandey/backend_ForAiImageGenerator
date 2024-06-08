

const imageModel = require("../models/imageModel");

const generateImage = async (req, res) => {
    const { searchText } = req.body;

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=rAbd1JeMbcTQrPkk5h1_BuXB4wYvimsyDj0EbuxjIIA`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const imageUrl = data.results[0].urls.regular; 

            await imageModel.create({
                searchText: searchText,
                imageUrl: imageUrl 
            });

            res.json({
                status: 'success',
                data: {
                    imageUrl: imageUrl,
                }
            });
        } else {
            res.json({
                status: 'fail',
                message: 'No images found'
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            message: 'Server error'
        });
    }
}

module.exports = {
    generateImage
}
