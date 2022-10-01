const express = require("express");
const {
    createshort,
    getlinkbyid,
    deletelink,
    searchbyshortlink,
    searchbydescription,
    getall
} = require("../controller/shortlink");
const passport = require("passport");



const router = express.Router();


router.post("/create",
passport.authenticate("jwt", { session: false }),
createshort
);

router.get("/getlink/:id",
passport.authenticate("jwt", { session: false }),
getlinkbyid);

router.delete("/delete/:id",
passport.authenticate("jwt", { session: false }),
deletelink);

router.get("/searchbyshortlink/:key",
passport.authenticate("jwt", { session: false }),
searchbyshortlink);

router.get("/searchbydescription/:key",
passport.authenticate("jwt", { session: false }),
searchbydescription);


router.get("/allshortcuts/:key",
passport.authenticate("jwt", { session: false }),
getall
)





module.exports = router;