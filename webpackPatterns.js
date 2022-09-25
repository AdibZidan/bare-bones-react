const fs = require('fs');
const path = require('path');

const imagesDirectory = './public/assets/images';
const isImagesDirectoryAvailable = fs.existsSync(imagesDirectory);
const webpackPatterns = isImagesDirectoryAvailable
  ? [
      {
        from: path.resolve(__dirname, './public/robots.txt')
      },
      {
        from: path.resolve(__dirname, './public/favicon.ico')
      },
      {
        from: path.resolve(__dirname, imagesDirectory),
        to: 'images'
      }
    ]
  : [
      {
        from: path.resolve(__dirname, './public/robots.txt')
      },
      {
        from: path.resolve(__dirname, './public/favicon.ico')
      }
    ];

module.exports = webpackPatterns;
