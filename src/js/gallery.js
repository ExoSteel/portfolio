const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image."));
    img.src = url
  })
}

async function insertCert(data){
  try {
    let string = "";
    // console.log(data)
    for (var yearIndex in data){

      if (data[yearIndex]["content"].length == 0){continue;}
      // console.log(year)

      string += `
        <h1 style="margin:auto; padding: 5vh 0 0 1vw;">${data[yearIndex]["year"]}</h1>
        
        <div class="grid">
      `

      let content = data[yearIndex]["content"]
      for (var record in content) {
        const img = await loadImage(content[record]["src"]);
        // console.log(img.width, img.height);

        let width = (img.width / 50) % 200;
        let height = (img.height / 50) % 200;

        string += `
          <div style="justify-self:center;">
            
            <img style="display:flex; justify-content:center; margin:0; width:${width}vw; height:${height}vh; object-fit:contain;" src=${content[record]["src"]}>
          </div> 
        `;
      }
      
      string += `
        </div>
      `
    }
    // <p style="text-align: center; margin:auto;">${data[ind]["title"]}</p>
    // <p style="text-align: center; margin:auto;">${data[ind]["year"]}</p>
    document.querySelector(".toInsert").innerHTML = string;
    return;
  } 
  catch (err) {
    console.error(err);
  }
}

fetch("/data/certificates.json")
  .then(response => response.json())
  .then(data => {
    insertCert(data["certificates"])
  }
)
