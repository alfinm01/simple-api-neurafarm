var client = require('./db_config')

const function1 = () => {
  let results
  client.connect(err => {
    const collection = client.db('test').collection('devices')
    results = collection.find({})
    // perform actions on the collection object
    client.close()
  })
  return results
}

const function2 = () => {
  client.connect(err => {
    const collection = client.db('test').collection('devices')
    collection.insertMany([
      { item: 'journal', qty: 25, status: 'A', size: { h: 14, w: 21, uom: 'cm' }, tags: ['blank', 'red'] },
      { item: 'notebook', qty: 50, status: 'A', size: { h: 8.5, w: 11, uom: 'in' }, tags: ['red', 'blank'] },
      { item: 'paper', qty: 10, status: 'D', size: { h: 8.5, w: 11, uom: 'in' }, tags: ['red', 'blank', 'plain'] },
      { item: 'planner', qty: 0, status: 'D', size: { h: 22.85, w: 30, uom: 'cm' }, tags: ['blank', 'red'] },
      { item: 'postcard', qty: 45, status: 'A', size: { h: 10, w: 15.25, uom: 'cm' }, tags: ['blue'] }
    ])
    // perform actions on the collection object
    client.close()
  })
  return 'success'
}

module.exports = {
  function1,
  function2
}
