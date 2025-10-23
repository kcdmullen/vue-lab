import { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectsCommand } from "@aws-sdk/client-s3";

export const handler = async (event) => {
    const match = event.body.match(/filename="([^"]+)"/);
    const filename = match ? match[1] : null;
    const s3Client = new S3Client({}); // Initialize S3 client
    const bucketName = "my-assets";
    const objectKey = `pathname/auto_test/${filename}`; // deleted as of Oct 23, 2025 - recreate for next test
    const dataToUpload = Buffer.from(event.body, 'base64');
    // await emptyFolder(bucketName, folderPrefix, s3Client);

    const params = {
        Bucket: bucketName,
        Key: objectKey,
        Body: dataToUpload,
        ContentType: event.body['Content-Type']
    };

    try {
        const command = new PutObjectCommand(params);
        const response = await s3Client.send(command);
        console.log("Successfully uploaded object:", response);
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5173',
                'Access-Control-Allow-Headers': 'Content-Type,Authorization',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
              },
            body: JSON.stringify(`Object uploaded successfully as ${filename}`)
        };
    } catch (error) {
        console.error("Error uploading object:", error);
        return {
            statusCode: 500,
            body: JSON.stringify(`Error uploading object: ${error.message}`)
        };
    }
};

// async function emptyFolder(bucketName, folderPrefix, s3Client) {
    // Ensure prefix ends with "/" if it's meant to represent a folder
    // if (!folderPrefix.endsWith("/")) {
    //   folderPrefix += "/";
    // }

    // // Step 1: List all objects under the prefix
    // const listParams = {
    //   Bucket: bucketName,
    //   Prefix: folderPrefix,
    // };
    // console.log(listParams)

    // const listedObjects = await s3Client.send(new ListObjectsV2Command(listParams));
    // console.log(listedObjects)

    // if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
    //   console.log("Folder is already empty.");
    //   return;
    // }

    // Step 2: Prepare batch delete
    // const deleteParams = {
    //   Bucket: bucketName,
    //   Delete: {
    //     Objects: listedObjects.Contents.map(({ Key }) => ({ Key })),
    //   },
    // };

    // console.log(deleteParams)

    // const deleteResult = await s3.send(new DeleteObjectsCommand(deleteParams));
    // console.log("Deleted:", deleteResult.Deleted.map(obj => obj.Key));

    // Step 3 (optional): Handle pagination if >1000 objects
    // if (listedObjects.IsTruncated) {
    //   await emptyFolder(bucketName, folderPrefix);
    // }
  // }
