# Test Cert API

## Description

This is a very simple app created for testing ways of getting past cert and key SSL verification.

It has two ports:
- 3000: Used as a non-SSL, simple way of reaching the app's endpoint.
- 3443: An SSL cert and key verified port where you will not be granted access unless you provide the cert and key

Cert and Key needed are in the /cert folder as 'mock-service.crt' and 'mock-service.key' respectively.

## Setup Instructions

### Using Docker

To launch using docker, run the following commands:

1. Build image: `docker build -t test-cert-api .`

2. Create container: `docker run --name test-cert -d -p 3443:3443 -p 3000:3000 test-cert-api`


### Locally

To launch locally, run the following commands:

1. Install dependencies: `npm install`

2. Run dev environment: `npm run dev`

## Using certificates

Below is an inexhaustive list of different ways to reach your localhost api

Cert and Key needed are in the /cert folder as 'mock-service.crt' and 'mock-service.key' respectively.

### Postman

1. Go to **Settings** > **Settings** > **General**. Turn off **'SSL certificate verification'**

2. Go to **Certificates** and click **Add Certificate**. Add the following:
- **HOST**: localhost:3443
- **CRT file**: add the file /cert/mock-service.crt
- **KEY file**: add the file /cert/mock-service.key

3. Close setting window and test the following endpoint: `https://localhost:3443/`

You should then see the response of 'Hello world'

### Curl command (linking to file)

TBC

### Curl command (full key and cert in command)

Sometimes it may be tricky to get to the files required (for example if you're testing from a heavily locked down workspace cloud project) and you'll need to have the cert and key in an overly long command:

TBC

### Wget command

TBC