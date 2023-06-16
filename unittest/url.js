const url = 'https://www.example.com?name=Tim&age=25'

const newUrl = new URL(url)
console.log(newUrl.href) // "https://www.example.com?name=Tim&age=25"

const sportsdirect = 'https://sportsdirect.com'
console.log(sportsdirect + newUrl.search) // "https://sportsdirect.com?name=Tim&age=25"

newUrl.searchParams.append('city', 'Amsterdam')
console.log(newUrl.href) // "https://www.example.com?name=Tim&age=25&city=Amsterdam"
console.log(newUrl.toString()) // "https://www.example.com?name=Tim&age=25&city=Amsterdam"

console.log(newUrl.searchParams.get('name')) // Tim
console.log(newUrl.searchParams.get('age')) // 25

newUrl.searchParams.set('age','28') // updating age 
console.log(newUrl.searchParams.get('age')) // 28
