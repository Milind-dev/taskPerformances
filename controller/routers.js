const express = require("express");
const router = express.Router();

const {
    getdata,
    getaddjob,
    gettype,
    getname,
    getpremiumsDatas
  
  } = require("../controller/jobs")

// Handling request using router

//http://localhost:3000/
router.get("/",getdata);

// http://localhost:3000/task/addjob
router.post("/task/addjob",getaddjob);

// http://localhost:3000/task?types=Active_Jobs
router.get("/task", gettype);

// http://localhost:3000/task/Doctor
router.get("/task/:name", getname);

// http://localhost:3000/task/job/premiumsDatas?ispre=true
router.get("/task/job/premiumsDatas", getpremiumsDatas);

// Importing the router
module.exports = router;
