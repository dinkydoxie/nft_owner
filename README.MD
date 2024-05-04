# Owner NFT Checker

## Prerequisites

- Node > 20 working
- Vottun credentials (Visit https://docs.vottun.io/start/get-your-api-key where you will find how to obtain it.)

## Configure

Configure `.env` file with:

- NETWORK_ID: the network in which the nft will be verified
- NFT_CONTRACT: the nft contract address to check
- NFT_ID: the nft id to check

- API_KEY: your Vottun API_KEY
- APPLICATION_ID: your Vottun APPLICATION_ID 

## Running

To run enter the command

`ADDRESS_TO_CHECK=<address that you want validate> node --env-file=.env main.js`


