const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../uploads/blogImages')); // Ensure absolute path
        console.log("path",path);
    },
    filename: function (req, file, cb) {
        console.log("file",file)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Generate a unique ID
        const ext = path.extname(file.originalname); // Get file extension
        cb(null, file.fieldname + '-' + uniqueSuffix + ext); // Set filename
    }
});

 // optimum/server/uploads/blogImages

 // optimum/server/src/middlware/multer.js

// File filtering (optional)
// const fileFilter = (req, file, cb) => {
//     // Accept only certain file types (images in this case)
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true);
//     } else {
//         cb(new Error('Not an image! Please upload an image file.'), false);
//     }
// };

// Initialize multer with options
const upload = multer({
    storage: storage,
    // fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
});

module.exports= upload