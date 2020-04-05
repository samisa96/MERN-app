const cloudinary = require('cloudinary');
cloudinary.config({

    cloud_name: 'dqxmh2ok3',
    api_key: '381947556192944',
    api_secret: 'Kn6CZFBU_sGU7dEM8TrU0iTDFlQ'
});

exports.uploads = (file) =>{
    return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) =>{
    resolve({url: result.url, id: result.public_id})
    }, {resource_type: "auto"})
    })
    }