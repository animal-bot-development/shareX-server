# shareX-server
This is a simple ShareX server that can host:
- Files
- Text
- Images

## Config
The config.json should follow this format:
    mongoURI: A mongoDB URL that can store the images
    webhook: A Discord Webhook URL that is used for sending logs
    token: The password that you want to use for the Authentication header
    domain: The domain name that the webhook and upload routes return
    port?: A port number (if not provided, it will default to 3000)

## Setting it up in ShareX
1. Go to destinations at the side
2. Set image, file and text uploader to Custom Image/File/Text Uploader
3. Go into the custom uploader settings
4. Set file form name to image
5. Set method to POST
6. Set the URL to https://domain/api/upload
7. Set type to Image, Text and File
8. Set Authentication header to your config's token

## Contributing
You can contribute by making a pull request.