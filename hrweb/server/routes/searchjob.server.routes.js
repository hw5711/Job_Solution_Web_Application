const express = require("express");
var mongoose = require('mongoose');

// const searchjob = require("../models/searchjob");
const searchjob = require("../models/job");
const app = express.Router();

app.post("", function (req, res, next) {
   
    //if 1 of conditon meet
    if (req.body.jobTitle != '' && req.body.jobType == '' && req.body.location == '' && req.body.industryType == '') {
        searchjob.find({ jobTitle: req.body.jobTitle }, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
    }

    if (req.body.jobTitle == '' && req.body.jobType != '' && req.body.location == '' && req.body.industryType == '') {
        searchjob.find({ jobType: req.body.jobType }, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
    }
    if (req.body.jobTitle == '' && req.body.jobType == '' && req.body.location != '' && req.body.industryType == '') {
        searchjob.find({ location: req.body.location }, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
    }

    if (req.body.jobTitle == '' && req.body.jobType == '' && req.body.location == '' && req.body.industryType != '') {
        searchjob.find({ industryType: req.body.industryType }, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
    }

    //if 2 of conditons meet
    if (req.body.jobTitle != '' && req.body.jobType != '' && req.body.location == '' && req.body.industryType == '') {
        searchjob.find({ jobType: req.body.jobType , jobTitle: req.body.jobTitle }, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
    }
    if (req.body.jobTitle != '' && req.body.jobType == '' && req.body.location != '' && req.body.industryType == '') {
        searchjob.find({ jobTitle: req.body.jobTitle, location: req.body.location  }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
    if (req.body.jobTitle != '' && req.body.jobType == '' && req.body.location == '' && req.body.industryType != '') {
        searchjob.find({ jobTitle: req.body.jobTitle, industryType: req.body.industryType  }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
    if (req.body.jobTitle == '' && req.body.jobType != '' && req.body.location != '' && req.body.industryType == '') {
        searchjob.find({ jobType: req.body.jobType, location: req.body.location }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
    if (req.body.jobTitle == '' && req.body.jobType != '' && req.body.location == '' && req.body.industryType != '') {
        searchjob.find({ jobType: req.body.jobType, industryType: req.body.industryType }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
    if (req.body.jobTitle == '' && req.body.jobType == '' && req.body.location != '' && req.body.industryType != '') {
        searchjob.find({ location: req.body.location, industryType: req.body.industryType  }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
  
    //if 3 of conditons meet
    if (req.body.jobTitle != '' && req.body.jobType != '' && req.body.location != '' && req.body.industryType == '')  {
        searchjob.find({ jobType: req.body.jobType,jobTitle: req.body.jobTitle, location: req.body.location }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
    if (req.body.jobTitle == '' && req.body.jobType != '' && req.body.location != '' && req.body.industryType != '')  {
        searchjob.find({ jobType: req.body.jobType,industryType: req.body.industryType, location: req.body.location }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }

    //if 4 of condition meet
    if (req.body.jobTitle != '' && req.body.jobType != '' && req.body.location != '' && req.body.industryType != '')  {
        searchjob.find({ jobType: req.body.jobType,industryType: req.body.industryType, location: req.body.location, jobTitle: req.body.jobTitle }, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } 

    // find how to perform keyword search like - uppper case/ lower case/ partial word
    // reference for partial search
    /*module.exports = exports = function addPartialFullSearch(schema, options) {
  schema.statics = {
    ...schema.statics,
    makePartialSearchQueries: function (q) {
      if (!q) return {};
      const $or = Object.entries(this.schema.paths).reduce((queries, [path, val]) => {
        val.instance == "String" &&
          queries.push({
            [path]: new RegExp(q, "gi")
          });
        return queries;
      }, []);
      return { $or }
    },
    searchPartial: function (q, opts) {
      return this.find(this.makePartialSearchQueries(q), opts);
    },

    searchFull: function (q, opts) {
      return this.find({
        $text: {
          $search: q
        }
      }, opts);
    },

    search: function (q, opts) {
      return this.searchFull(q, opts).then(data => {
        return data.length ? data : this.searchPartial(q, opts);
      });
    }
  }
}*/
    

});
/*
app.post("/create", function (req, res, next) {
    searchjob.create(req.body, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
}); */

module.exports = app;