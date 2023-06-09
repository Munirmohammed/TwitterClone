import express from 'express'
const app = express();
const port = 5000;

const server = app.listen(port, () => console.log("Server listening on port " + port + "..."));


app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {

    var payload = {
        pageTitle: "Home"
    }

    res.status(200).render("home", payload);
})