const http = require('http');

const data = JSON.stringify({
  model: 'default',
  input: [
    'N',
    'N',
    'N',
    { R: [0, 50], G: [0, 50], B: [0, 50] },
    { R: [200, 255], G: [200, 255], B: [200, 255] },
  ],
});

const options = {
  hostname: 'colormind.io',
  path: '/api/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = http.request(options, (res) => {
  if (res.headers['content-type'] !== 'application/json') {
    console.error('Unexpected response content type:', res.headers['content-type']);
    return;
  }

  let responseBody = '';

  res.on('data', (chunk) => {
    responseBody += chunk;
  });

  res.on('end', () => {
    const responseJSON = JSON.parse(responseBody);
    const colors = responseJSON.result.map(
      (color) => `#${color.map((c) => c.toString(16).padStart(2, '0')).join('')}`
    );

    console.log('Primary:', colors[0]);
    console.log('Secondary:', colors[1]);
    console.log('Tertiary:', colors[2]);
    console.log('Background Dark:', colors[3]);
    console.log('Background Light:', colors[4]);
  });
});

req.on('error', (error) => {
  console.error('An error occurred:', error);
});

req.write(data);
req.end();
