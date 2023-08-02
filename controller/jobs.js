const data = require('../data/datas.json')

/* data response */
const getdata = (req, res, next) => {
    res.status(200).json({ data, message:"data succesfully loaded" });
  }

/* data are post req body */
const getaddjob = (req, res) => {
    var jsondatas = {
      name: req.body.name,
      location: req.body.location,
      posted: req.body.posted,
      status: req.body.status,
      applied: req.body.applied,
      jobViews: req.body.jobViews,
      daysLeft: req.body.daysLeft,
      premium: req.body.premium,
      dateFormat: req.body.dateFormat,
    };
    var { jobData } = data;
    for (let i = 0; i < jobData.length; i++) {
      jobData.push(jsondatas);
      // jobData.push(jsondatas)
      return res
        .status(200)
        .json({ message: "User has been added successfully" });
    }
  }

/* jobs are active or not by query */
const gettype = (req, res) => {
    var types = req.query.types;
    console.log(types);
    if (types === "Active_Jobs") {
      let { type } = data;
      res.status(200).json({ type, message:"succefully  jobs are Active " });
    } else {
      res.send({ message: "404",message:"not found" });
    }
  }

/* name  are match by url Doctor*/
const getname = (req, res) => {
    const names = req.params.name;
    const { jobData } = data;
    for (var i = 0; i < jobData.length; i++) {
      if (jobData[i].name === names) {
        // console.log("222222 ",res,jobData[i].name)
        res.status(200).json({ name: jobData[i].name, location: jobData[i].location });
      }
    }
    res.status(404).send("error");
  }

/* premium data see , return true or false url */
const getpremiumsDatas = (req, res) => {
    let { jobData } = data;
    let ispre = req.query.ispre;
    console.log(ispre);
    if(ispre === "false"){
      const premiumsDatas = jobData.filter((el,index) => el.premium === false)
      res.json({premiumsDatas,message:"succesffully filter false data"})
    }
    else{
      const premiumsDatas = jobData.filter((el,index) => el.premium === true)
      res.status(200).json({premiumsDatas,message:"successfully true data filter",status:res.status})
    }
  }

  /* module exports */
  module.exports = {
    getdata,
    getaddjob,
    gettype,
    getname,
    getpremiumsDatas
}