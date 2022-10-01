const Shortcut = require("../model/Shortcuts");
const User = require("../model/User");

// create short link

exports.createshort = async (req, res, next) => {
  console.log(req.body);
  try {
    
    const check = await Shortcut.findOne({ shortlink: req.body.shortlink , author :req.user._id });
    if (JSON.stringify(check?.author) === JSON.stringify(req.user._id)) {
      return res.status(200).json({
        message: "Link already exist for Current User",
      });
    }
    let url = new URL(req.body.url)
    if(url.protocol === "http:" ||  url.protocol === "https:"){

    let tempBody = req.body
    let currentuserId = req.user._id
    let newobject = {...tempBody,author:currentuserId}
    const createdLink = await Shortcut.create(newobject);

    return res.status(200).json({
      success: true,
      message: "Link created successfully",
      data: createdLink,
    });

    }else{
        return res.status(200).json({
            message: "Not a Valid URL",
          });
    }
    
   } catch (err) {
    res.status(404).json({
      message: `${err}`,
    });
  }
};

// delete shortlink

exports.deletelink = async (req, res, next) => {
    try {
        const link = await Shortcut.findById(req.params.id);
        if (JSON.stringify(link?.author) !== JSON.stringify(req.user._id)) {
            return res.status(200).json({
              message: "You are not authorized User",
            });
          }
        await Shortcut.findByIdAndDelete(req.params.id);
        res.status(200).json({
          success: true,
          message: "Link deleted successfully",
          data: {},
        });
    } catch (err) {
      console.log("Failed", err);
    }
  };

//    get shortcut link based on Id
exports.getlinkbyid = async (req, res, next) => {
try {
    const link = await Shortcut.findById(req.params.id);
    if (JSON.stringify(link?.author) !== JSON.stringify(req.user._id)) {
        return res.status(200).json({
            message: "You are not authorized User",
        });
        }
    res.status(200).json({
        success: true,
        message: "Link fetch successfully",
        data: link,
    });
    } catch (err) {
        console.log("Failed", err);
    }
};

// get all shortcut link of current user

exports.getall = async (req, res, next) => {
try {

    let shortBy = req.params.key
    if(shortBy === "shortlink"){
        const link = await Shortcut.find({author:req.user._id}).sort({shortlink: 'asc' ,createdAt:'asc', updatedAt:'asc' });
        res.status(200).json({
        success: true,
        message: "Link fetch successfully",
        data: link,
        });

    }else if (shortBy === "description"){
        const link = await Shortcut.find({author:req.user._id}).sort({description:'asc' ,createdAt:'asc', updatedAt:'asc' });
        res.status(200).json({
        success: true,
        message: "Link fetch successfully",
        data: link,
        });

    }else{
        const link = await Shortcut.find({author:req.user._id}).sort({shortlink: 'asc', description:'asc' ,createdAt:'asc', updatedAt:'asc' });
        res.status(200).json({
        success: true,
        message: "Link fetch successfully",
        data: link,
        });
    }
    } catch (err) {
        console.log("Failed", err);
    }
};

// serch link based on name
exports.searchbyshortlink  = async (req, res) => {
    const regex = new RegExp(req.params.key, "i");
    const result = await Shortcut.find({
         shortlink: regex,
        }).select("shortlink description url tags author");

    const filterData = result.filter(link=>JSON.stringify(link?.author) === JSON.stringify(req.user._id))

    return res.status(200).json({
        message: "Links by sorted order",
        data: filterData
    });
};

// search link based on description
exports.searchbydescription  = async (req, res) => {
    const regex = new RegExp(req.params.key, "i");
    const result = await Shortcut.find({
        description: regex,
    }).select("shortlink description url tags author");

    const filterData = result.filter(link=>JSON.stringify(link?.author) === JSON.stringify(req.user._id))
    
    return res.status(200).json({
        message: "Links by sorted order",
        data: filterData,
    });
};
  

