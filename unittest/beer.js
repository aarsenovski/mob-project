class Api {
  constructor() {
    this.url = 'https://api.sampleapis.com/beers'
  }

  async getBeers() {
    const response = await fetch(`${this.url}/ale`)
    return await response.json()
  }
}

const api = new Api()

module.exports = api
