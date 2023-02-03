const api = require('./beer')

test('test for the first beer', async ()=> {
 const response = await api.getBeers()
 console.log(response)
} )