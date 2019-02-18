var {Given, When, Then,Before,BeforeAll,After,AfterAll} =require('cucumber');

BeforeAll(function () {

    console.log("Inside BeforeAll Hook");
});

AfterAll(function () {

    console.log("Inside AfterAll Hook");
});


Before("@dev",function () {

    console.log("Inside Before Hook");
});

After(function () {

    console.log("Inside After Hook");
});