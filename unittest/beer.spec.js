const api = require('./beer')

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(BEERS),
  })
)
// will not make a real test which makes it faster, reliable - otherwise it's just an API test
// resolved with array of object BEERS

const BEERS = [
  {
    price: '$16.99',
    name: 'Founders All Day IPA',
    rating: { average: 4.411243509154233, reviews: 453 },
    image:
      'https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png',
    id: 1,
  },
  {
    price: '13.99',
    name: 'Blue Moon Belgian White Belgian-Style Wheat Ale',
    rating: { average: 4.775260833383482, reviews: 305 },
    image:
      'https://www.totalwine.com/media/sys_master/twmmedia/he8/h67/11931543830558.png',
    id: 2,
  },
  {
    price: '13.99',
    name: 'Blue Moon Belgian White Belgian-Style Wheat Ale Blue Moon Belgian White Belgian-Style Wheat Al Blue Moon Belgian White Belgian-Style Wheat Al Blue Moon Belgian White Belgian-Style Wheat Al Blue Moon Belgian White Belgian-Style Wheat Al',
    rating: { average: 4.775260833383482, reviews: 305 },
    image:
      'https://www.totalwine.com/media/sys_master/twmmedia/he8/h67/11931543830558.png',
    id: 2,
  },
]

test('test for the first beer price', async () => {
  const response = await api.getBeers()
  expect(response[0].price).toBe('$16.99')
})
