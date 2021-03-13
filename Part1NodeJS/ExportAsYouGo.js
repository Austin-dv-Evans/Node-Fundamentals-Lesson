// Alternative Synatax

// const items = ['item1', 'item2']
module.exports.items = ['item1', 'item2']

const person = {
  firstName: "Bob"
}
// here we add a siglePerson property to the module exports object
module.exports.singlePerson = person

console.log(module);