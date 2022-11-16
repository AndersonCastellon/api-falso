const express = require('express')
var cors = require('cors')

const chartData = require('./dummy/chart-data')
const chartMetadata = require('./dummy/chart-metadata')
const eventsResponse = require('./dummy/events')
const notificationsResponse = require('./dummy/notifications')

const app = express()
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
    res.send('All ok')
})

app.get('/:slug/chart-metadata', (req, res) => {
    res.json(chartMetadata)
})

app.get('/:slug/chart-data', (req, res) => {
    res.json(chartData)
})

app.get('/:slug/chart-data/:dataId', (req, res) => {
    const dataId = req.params.dataId
    const data = chartData.find((data) => data.id === +dataId);
    res.json(data)
})

app.get('/:slug/events', (req, res) => {
    res.json(eventsResponse())
})

app.get('/:slug/notifications', (req, res) => {
    res.json(notificationsResponse())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app