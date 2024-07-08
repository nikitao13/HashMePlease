# CTF Challenge: Hash Me Please

## Challenge Description

This challenge involves interacting with a web server that provides a message. The task is to hash this message using SHA-512 and submit the hash back to the server within 2 seconds to retrieve a flag.

## Solution Overview

The solution is implemented in Node.js and involves the following steps:

1. Fetch the initial message from the server
2. Extract the relevant part of the message
3. Hash the message using SHA-512
4. Submit the hash back to the server
5. Extract and display the flag from the server's response

## Code Breakdown

### Dependencies

- `axios`: For making HTTP requests
- `crypto`: For creating the SHA-512 hash
- `jsdom`: For parsing HTML responses
- `dotenv`: For managing environment variables

### Key Functions

1. `getMessage()`:

   - Sends a GET request to the challenge server
   - Parses the HTML response
   - Extracts the relevant message

2. `hashMsg()`:

   - Calls `getMessage()` to get the message
   - Hashes the message using SHA-512

3. `getFlag()`:
   - Calls `hashMsg()` to get the hash
   - Submits the hash to the server
   - Extracts the flag from the response

### Error Handling

The code includes try-catch blocks in the main functions to handle potential errors, such as network issues or missing elements in the HTML responses.

### Execution

The main execution flow calls `getFlag()`, then logs the flag if successful or logs any errors that occur.

## Running the Script

1. Ensure you have Node.js installed
2. Install the required dependencies: `npm install axios jsdom dotenv`
3. Create a `.env` file with your `COOKIE` value
4. Run the script: `node hash.js`

## Notes

- The script uses a timeout of 4269ms for the initial request to prevent hanging if the server doesn't respond
- Make sure to keep your cookie value secret and do not share it publicly
