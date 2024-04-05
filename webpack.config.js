const path = require('path');

module.exports = {
  entry: './index.js', // Replace with your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve : {
    fallback :{
        'http':require.resolve('stream-http'),
        'url':false,
        'buffer':false

    }
  }
};
