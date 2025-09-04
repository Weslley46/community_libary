import express from 'express'
const app = express()

app.use(express.json());
  const user = []

app.post("/users", (req, res) => {
  const body = req.body
  users.push(body)
  res.status(201).send("User created")
});

app.get("/users", (req, res)=>{
  res.send({users})
})

app.listen(3000, () => {console.log("Server is running on port 3000")} )