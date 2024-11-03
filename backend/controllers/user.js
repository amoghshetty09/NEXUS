const User=require("../model/user");

async function getuserQ(req,res)
{
    const {question,email}=req.body;
    await User.create({
        question,
        email,
    })
    return res.send("got the Question");
}

module.exports={
    getuserQ
}
