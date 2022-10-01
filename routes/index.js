const express = require("express");
const router = express.Router();
const auth = require("./auth");
const shortlink = require("./shortlink")

router.get("/check",(req,res)=>{
    return res.status(200).json({
        message: "HomePage",
        success: true,
      });
})
router.use("/auth", auth);
router.use("/shortlink",shortlink)


module.exports = router;