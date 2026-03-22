import express from 'express'

import {PORT} from "./src/config/serverConfig.js"


const setupAndStartServer = async () => {

    const app = express();

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`)
    })
}


setupAndStartServer();