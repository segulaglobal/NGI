import fetch from 'node-fetch';

async function run() {
  const resp = await fetch(
    `https://devp-reqsendmoney-230622-api.hubtel.com/request-money/bulk`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from('<username>:<password>').toString('base64')
      },
      body: JSON.stringify({
        amount: 1,
        title: 'string',
        description: 'string',
        clientReference: 'string',
        callbackUrl: 'http://example.com',
        cancellationUrl: 'http://example.com',
        returnUrl: 'http://example.com',
        logo: '/assets/ngi-logo-color.png',
        audience: ['string']
      })
    }
  );

  const data = await resp.json();
  console.log(data);
}

run();