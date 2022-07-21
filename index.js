const https = require("https");
const crypto = require('crypto');
const fsPromises = require("fs").promises;

function spliceString(string, condition) {
  return string.replace(",", "").split(condition);
}

function mountObjectWithString(string) {
  let obj = [];
  for (let i = 0; i < string.length; i += 2) {
    obj = [
      ...obj,
      {
        key: spliceString(string[i], "=")[1],
        age: spliceString(string[i + 1], "=")[1],
      },
    ];
  }

  return obj;
}

async function createHash(){

    const fileBuffer = await fsPromises.readFile('./output.txt');
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    return hex

}

https.get("https://coderbyte.com/api/challenges/json/age-counting", (resp) => {
  var body = "";
  resp.on("data", function (chunk) {
    body += chunk;
  });
  resp.on("end", async function () {
    const obj = JSON.parse(body);

    let responseStrinSplice = spliceString(obj.data, " ");

    let objectToString = mountObjectWithString(responseStrinSplice);

    objectToString.map(async (item) => {
      if (item.age == "32") {

        await fsPromises.appendFile("./output.txt", item.key + "\n");
      }
    });

    let hash = await createHash()

    console.log(hash)
  });
});
