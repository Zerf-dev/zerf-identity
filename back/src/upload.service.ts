import * as AWS from 'aws-sdk'
import * as fs from 'fs';

const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint(`sfo3.digitaloceanspaces.com`),
  accessKeyId: process.env.DO_ACCESS_KEY_ID,
  secretAccessKey: process.env.DO_SECRET_ACCESS_KEY
});

export const uploadImage = async (imagePath: string, userName: string) => {
    const uploadedFile = await s3.upload({
      Bucket: 'zerf-identity',
      Key: `${userName}.jpg`,
      Body: fs.createReadStream(imagePath),
      ACL: 'public-read',
      ContentType: 'image/jpeg'
    }).promise()

    console.log("uploadedFile.Location", uploadedFile.Location)
    return uploadedFile.Location
  }