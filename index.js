//import http modul
import * as http from 'http'

//creating server
const server = http.createServer((req, res) => {
    res.write("Hello World!")
    res.end()
})
//set server port
server.listen(3_000)