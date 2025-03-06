import express from "express"

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const today = new Date("March 8, 2025")
    const day = today.getDay()
     
    // console.log(day)
    let type = "a weekday"
    let adv = "It's time to work"

    if (day === 0 || day === 6){
        type = "the weekend"
        adv = "time to enjoy"
    }

    res.render("index.ejs", {dayType: type, advice: adv})
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})