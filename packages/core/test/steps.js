var { filltemplate }=require('../index')
var Cucumber=require('@cucumber/cucumber')

var chai=require('chai')
var assert=chai.assert;
var Given = Cucumber.Given;
var When = Cucumber.When;
var Then = Cucumber.Then;
       
   Then('it is exactly equal to:', function(docString) {
     assert.equal(this.results.lastRun, docString, `${this.lastRun} not equal to ${docString}`)
   })
   When('run templateString', function (docString) {
     if(!this.results) {
       this.results={}
     }
     this.results["lastRun"]=filltemplate(docString, this.results)
     this.attach(JSON.stringify(this.results.lastRun))
   })
