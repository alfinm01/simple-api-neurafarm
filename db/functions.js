var client = require('./db_config')

// await client.connect itu masih belum best practice?
// masih ada deprecation warning

const function1 = async () => {
  await client.connect()
  const collection = await client.db('test').collection('devices')
  const results = await collection.find().toArray()
  // await collection.find().close()
  return results
}

const function2 = async () => {
  await client.connect()
  const collection = await client.db('test').collection('devices')
  const results = await collection.insertMany([
    { item: 'journal', qty: 25, status: 'A', size: { h: 14, w: 21, uom: 'cm' }, tags: ['blank', 'red'] },
    { item: 'notebook', qty: 50, status: 'A', size: { h: 8.5, w: 11, uom: 'in' }, tags: ['red', 'blank'] },
    { item: 'paper', qty: 10, status: 'D', size: { h: 8.5, w: 11, uom: 'in' }, tags: ['red', 'blank', 'plain'] },
    { item: 'planner', qty: 0, status: 'D', size: { h: 22.85, w: 30, uom: 'cm' }, tags: ['blank', 'red'] },
    { item: 'postcard', qty: 45, status: 'A', size: { h: 10, w: 15.25, uom: 'cm' }, tags: ['blue'] }
  ])
  // await collection.insertMany().close()
  return results
}

module.exports = {
  function1,
  function2
}
