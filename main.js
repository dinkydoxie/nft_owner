
const { NETWORK_ID, NFT_CONTRACT, NFT_ID, ADDRESS_TO_CHECK, API_KEY, APPLICATION_ID } = process.env;

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  'x-application-vkn': APPLICATION_ID,
  'Content-Type': 'application/json',  
};

const apiUrl = 'https://api.vottun.tech/erc/v1/erc721/ownerOf';

const check = async () => {
  try {

    const result = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ contractAddress: NFT_CONTRACT, network: parseInt(NETWORK_ID, 10), id: parseInt(NFT_ID, 10) }),
    });

    if (result.ok) {
      const { owner } = await result.json();
      const isNftOwner = owner === ADDRESS_TO_CHECK;
      const text = isNftOwner ? `Yes, the address ${ADDRESS_TO_CHECK} owns the NFT` : `No, the address ${ADDRESS_TO_CHECK} does not own the nft`
      return console.log(text);
    } else {
      console.log(result);
      throw new Error('Error');
    }
  }
  catch(e) {
    throw new Error(e);
  }
}

check();