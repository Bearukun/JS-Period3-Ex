const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const headers = {
  Authorization: 'Bearer YOUR_AUTH_TOKEN'
}

const client = new Lokka({
  transport: new Transport('https://api.graph.cool/simple/v1/cj8mpr77h0gx00176gk10diy5', {headers})
});

function getItems() {
  return client.query(`
      {
      allLinks{
        createdAt
        description
        id
        updatedAt
        url
      }
    }
  `)
}

getItems().then((data)=>console.log(data));