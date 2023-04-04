const http = require('http');
const { spawn } = require('child_process');


const options = {
  hostname: 'colormind.io',
  path: '/api/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const data = JSON.stringify({
  model: 'default',
});

const req = http.request(options, (res) => {
  let response = '';
  res.on('data', (chunk) => {
    response += chunk;
  });
  res.on('end', () => {
    const responseData = JSON.parse(response);
    console.log('Response:', responseData);
  
    const colors = responseData.result.map((c) => {
      const [r, g, b] = c;
      return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    });
  
    const darkMin = [30, 30, 30];
    const darkMax = [100, 100, 100];
    const lightMin = [200, 200, 200];
    const lightMax = [255, 255, 255];
  
    const labeledColors = colors.map((c, i) => {
      let [r, g, b] = c.substring(1).match(/.{1,2}/g).map((x) => parseInt(x, 16));
      if (i === 3) {
        r = Math.max(Math.min(r, darkMax[0]), darkMin[0]);
        g = Math.max(Math.min(g, darkMax[1]), darkMin[1]);
        b = Math.max(Math.min(b, darkMax[2]), darkMin[2]);
        return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
      } else if (i === 4) {
        r = Math.max(Math.min(r, lightMax[0]), lightMin[0]);
        g = Math.max(Math.min(g, lightMax[1]), lightMin[1]);
        b = Math.max(Math.min(b, lightMax[2]), lightMin[2]);
        return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
      } else {
        return c;
      }
    });
  
    const primary = labeledColors[0];
    const secondary = labeledColors[1];
    const tertiary = labeledColors[2];
    const dark = labeledColors[3];
    const light = labeledColors[4];

    console.log(`Primary: ${primary}`);
    console.log(`Secondary: ${secondary}`);
    console.log(`Tertiary: ${tertiary}`);
    console.log(`Dark: ${dark}`);
    console.log(`Light: ${light}`);
  });
});

req.write(data);
req.end();
