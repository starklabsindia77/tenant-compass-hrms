 
// utils/fileService.js

const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Set up AWS S3 configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Function to upload a file to AWS S3
const uploadFile = async (filePath, bucketName, fileName) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileContent,
  };

  try {
    const data = await s3.upload(params).promise();
    return data.Location;  // Return the file URL in S3
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('File upload failed');
  }
};

// Function to download a file from AWS S3
const downloadFile = async (bucketName, fileName, downloadPath) => {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };

  try {
    const data = await s3.getObject(params).promise();
    fs.writeFileSync(path.resolve(downloadPath, fileName), data.Body);
    return `File downloaded to ${downloadPath}`;
  } catch (error) {
    console.error('Error downloading file:', error);
    throw new Error('File download failed');
  }
};

module.exports = {
  uploadFile,
  downloadFile,
};
