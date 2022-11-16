const falso = require('@ngneat/falso');

const eventsResponse = () => {
    const response = {
      totalItems: 25,
      items: []
    }
    for(let i = 1; i <= 25; i++) {
      const event = {
        createdAt: falso.randBetweenDate({ from: new Date('01/01/2021'), to: new Date() }).toISOString(),
        trackingId: falso.randUuid(),
        params: {},
        type: falso.randText(),
        userId: falso.randUuid(),
        id: falso.randUuid()
      }
      response.items.push(event)
    }

    return response
  }

module.exports = eventsResponse