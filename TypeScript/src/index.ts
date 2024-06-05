import express, { Express, Request, Response } from "express";
const app: Express = express()
const PORT = 3030

app.get("/", (req: Request, res: Response) => {
    res.send("Express BUM")
})

app.listen(PORT, () => {
    console.log("BATATAS")
})