const express = require('express')
const app = express()
const port = 3000
const path = require('path')



app.use('/shared-assets', express.static(path.join(__dirname, '/shared-assets')))
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/indextest4', (req, res) => {
    res.sendFile(path.join(__dirname, '/indextest4.html'));
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})