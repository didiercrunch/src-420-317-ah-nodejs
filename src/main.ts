import {hello} from './handlers.ts';
import express from "express";

export const foo = 100;

const app = express()
const port = 3000

app.get("/", hello)

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})