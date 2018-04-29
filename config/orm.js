const query = require('./connection.js');

function Burger(burgerInfo) {
  this.id = burgerInfo.id;
  this.name = burgerInfo.burger_name;
  this.devoured = burgerInfo.devoured || false;
  this.createdAt = burgerInfo.createdAt || Date.now();
}

const selectAll = async function () {

  const queryAll = `
      Select b.id, b.burger_name, b.devoured, b.createdAt
      From burgers as b limit 1;
    `;

  const results = await query(queryAll);

  return results.map(burger => {
    return new Burger(burger)
  });

}

const insertOne = async function (burger) {
  queryInsert = `
      insert burgers
      set ?;
    `;

  const vals = {
    burger_name: burger.name,
    devoured: burger.devoured,
    createdAt: burger.createdAt
  };

  const results = await query(queryInsert, vals);

  return results;
}

const updateOne = function () {

}

// module.exports = {
//   selectAll,
//   insertOne,
//   updateOne
// };

const myBurger = new Burger({ burger_name: "jason burger" });

insertOne(myBurger).then(x => {
  console.log(x);
}).catch(x => {
  console.log(x);
  console.log('none')
});