const express = require('express')
const app = express()
const port = 3000
const path = require('path')



app.use('/shared-assets', express.static(path.join(__dirname, '/shared-assets')))
app.use('/pic', express.static(path.join(__dirname, '/pic')))



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index2.html'));
  })


app.get('/specific', (req, res) => {
    res.sendFile(path.join(__dirname, '/page2.html'));
})

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '/p3test2.html'));
})


app.get('/indextest4', (req, res) => {
    res.sendFile(path.join(__dirname, '/indextest4.html'));
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})