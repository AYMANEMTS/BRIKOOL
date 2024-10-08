const  Users = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerClient = async (req, res) => {
    try {
        const client = await Users.create(req.body)
        const token = jwt.sign({userId:client._id},process.env.JWT_SECRET_KEY);
        res.cookie("jwt", token, {httpOnly: true,maxAge: 30 * 24 * 60 * 60 * 1000 });
        res.status(200).json({user:client,jwt: token})
    }catch (e) {
        res.status(500).json({error: e})
    }
}
const loginClient = async (req, res) => {
    try {
        const client = await Users.findOne({ email: req.body.email });
        if (!client || (!await bcrypt.compare(req.body.password, client.password))) {
            res.status(400).json({ message: "Incorrect email or password" })
        }
        const token = jwt.sign({userId:client._id},process.env.JWT_SECRET_KEY);
        res.cookie("jwt", token, {httpOnly: true,maxAge: 30 * 24 * 60 * 60 * 1000 });
        res.status(200).json({user:client,jwt: token})
    }catch (e) {
        res.status(500).json({error: e})
    }
}

const logout = async (req,res) => {
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message: "logout success"})
    }catch (e) {
        res.status(500).json({error: e})
    }
}

const authenticateToken = (req, res) => {
    const token = req.cookies.jwt; // Get token from HTTP-only cookie

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Token expired or invalid" });
        }
        req.user = decoded; // Attach the decoded token (user) to the request
        res.status(200).send({ message: "Token has been checked successfully" });
    });
};

module.exports = {registerClient,loginClient,logout,authenticateToken};