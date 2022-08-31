const Users = require("../users/userModel");

exports.addUser = async (req, res) => {
    try {
        if (req.body.name && req.body.age) {
            console.log(req.body)
            await Users.create({ name: req.body.name, age: req.body.age })
            res.status(201).send(await Users.find({}))
        } else {
            console.log("no name or age found")
            res.status(400).send({ error: "no name or age found" })
        }
    } catch (error)
    {
        console.log("error in addUser")
        res.status(500).send({ error: "internal server error" })
        console.log(error)
    }
}

exports.listUsers = async (req, res) => {
    try {
        let userList = await Users.find({});
        if (userList.length > 0) {
            console.log("inside listUsers")
        res.status(200).send(await Users.find({}));
        } else {
            console.log("Nothing to display")
            res.status(400).send({error: "request failed, no users to display"})
        }
    } catch (error) {
        console.log("error in listUsers")
        res.status(500).send({error:"internal server error"})
        console.log(error)
    }
}


exports.userDeleteOne = async (req, res) =>
{
    try {
        let userList = await Users.find({})
        console.log(userList)
        if ((req.body.name && req.body.age) && userList.length > 0) {
        await Users.deleteOne({ name: req.body.name, age: req.body.age })
        res.status(200).send(await Users.find({}))
        } else {
            console.log("Nothing to delete")
            res.status(400).send({error: "request failed"})
        }
    } catch (error) {
        console.log("error in userDeleteOne")
        res.status(500).send({error:"internal server error"})
        console.log(error)
    }
}

exports.userDeleteMany = async (req, res) => {
    try {
        let userList = await Users.find({})
        if (muserList.length > 0){
            await Users.deleteMany({userList})
            res.status(200).send("Contents deleted")
        }
        else {
            console.log("Nothing to delete")
            res.status(400).send({error: "request failed"})
        }
    } catch (error) {
        console.log("error in userDeleteMany")
        res.status(500).send({error:"internal server error"})
        console.log(error)
    }
}

exports.userEdit = async (req, res) =>
{
    try
    {
        await Users.updateOne({ name: req.body.name, age: req.body.age }, { name: req.body.nameR, age: req.body.ageR })
        res.status(200).send(await Users.find({}))
    } catch (error)
    {

        res.status(200).send(console.log("Failed to list items"))
        console.log(error)
    }

}

