var manger = {
    firstname: "shlomo",
    lastname: "hailo",
    age: 29,
    cash: 25000,

}


var poal = {
    firstname: "shimon",
    yeardate: 1996,
    email: "shimonbeery@g,mail.com",
    adress: "kirat malachi",

}

var pri = {
    namepri: "agas",
    colorpri: "red",
    typepri: "pri",

}

document.write(pri.namepri + "<br>");
document.write(pri.colorpri + "<br>");
document.write(pri.typepri + "<br>");


var classs = {
    nummbercalss: 1,
    students: 5,
    namestudents: ["shimon", "sara", "shlomo", "avi", "lol"],



}
for (var i = 0; i < classs.namestudents.length; i++) {
    document.write(classs.namestudents[i] + "<br>")
}


var childrengan = {
    nameganint: "dina",
    numberchildren: 10,
    namechildren: ["sara", "yakov", "shimon", "shlomo", "ran", "ayaso", "erez", "moshe", "yaya", "avi"]

}
for (var i = 0; i < childrengan.namechildren.length; i++){

    document.write(childrengan["namechildren"][i]+ "<br>");
}

var keyvalue = prompt("enter");
document.write(childrengan[keyvalue] );

var cals ={};

cals.numberclass= prompt("enter class number");
cals.numberchildren= prompt("enter class children");
cals.numberages= prompt("enter class age");

document.write(cals);


var techer = {};
var keyeord = prompt("enter somthinf");
var nanmes = prompt("enter value");
techer[keyeord] = nanmes;

console.log(techer);


var mangerobj = {};
for (var i = 0; i < 4; i++) {
    var mykey = prompt("enter key ");
    var myvalue = prompt("entet value ");
    mangerobj[mykey] = myvalue;
}
console.log(mangerobj);

var user = {};

for (var i = 0; i < 4; i++) {
    var keys = prompt("enter key");
    var values = prompt("enter value")
    user[keys] = values;
    document.write("<div>" + user[keys] + "<div>");

}

var carsArray = [];
for (var i = 0; i < 4; i++) {
    var privateobj = {};
    privateobj.campony = prompt("enter compny");
    privateobj.color = prompt("enter color");
    privateobj.cc = prompt("enter cc");
    privateobj.year = prompt("enter year");
    carsArray.push(privateobj);
    document.write("<div>" + privateobj.campony + " " + privateobj.color + " " + privateobj.cc + " " + privateobj.year + " " + "</div>")
}

function cats() {
    var catArray = [];
    for (var i = 0; i < 3; i++) {
        var cats = {};
        cats.namess = prompt("enter name");
        cats.year = prompt("enter year");
        cats.types = prompt("enter types");
        cats.meskal = prompt("enter meskal");
        catArray.push(cats);
        document.write("<h1>" + cats.namess + " " + cats.year + " " + cats.types + " " + cats.meskal + "</h1>");

    }
}
cats();

function dogs() {
    var objTime = +prompt("enter times")
    var dogsArray = [];
    for (var i = 0; i < dogsArray; i++) {
        var dogs = {};
        dogs.namess = prompt("enter name");
        dogs.age = +prompt("enter age");
        dogs.type = prompt("enter type");
        dogs.nameOwner = prompt("enter name owner");
        dogsArray.push(dogs);
        document.write("<p>" + dogs.namess + " " + dogs.age + " " + dogs.type + " " + dogs.nameOwner + "</p>")
    }
}
dogs();


function getInsect() {
    var getobject = +prompt("enter Rounds ");
    for (var i = 0; i < getobject; i++) {
        var objInsect = {};
        objInsect.name = prompt("enter name insect");
        objInsect.NumberOfLegs = +prompt("enter name insect");
        objInsect.Scientificname = prompt("enter name insect");
        objInsect.wings = confirm("have a wings?");
        if (objInsect.wings == true) {
            document.write("<h3>" + objInsect.name + " " + objInsect.NumberOfLegs + " " + objInsect.Scientificname + "</h3>")
        }



    }
}
getInsect();





function getChild(params) {
    var getobject = +prompt("enter rounds")
    for (var i = 0; i < getobject; i++) {
        objchild = {};
        objchild.name = prompt("enter name");
        objchild.age = +prompt("enter age");
        objchild.gan = prompt("the children in gan");
        if (objchild.age > 4) {
            document.write("<p>" + objchild.name + " " + objchild.age + " " + objchild.gan + "<p/>")
        }



    }
}
getChild();




function getComputers(number) {
    for (var i = 0; i < number; i++) {
        var objcomputer = {};
        objcomputer.compony = prompt("enter compony");
        objcomputer.models = prompt("enter model");
        objcomputer.Weight = +prompt("enter weight");
        objcomputer.Stock = confirm("Is there in stock?");
        if (objcomputer.Stock == true && objcomputer.Weight > 2) {
            document.write("<p>" + objcomputer.compony + " " + objcomputer.models +  "</P>")

        }




    }
}
getComputers(2);


function GetTeachers(number) {
    for (var i = 0; i < number; i++) {
        var objteachers = {};
        objteachers.firstame = prompt("enter name");
        objteachers.Hourlywage = +prompt("enter Hourlywage");
        objteachers.email = prompt("enter email");
        objteachers.YearofBirth = prompt("enter YearofBirth");

        if (objteachers.Hourlywage > 100 || objteachers.YearofBirth < 1990) {
            document.write("<p>" + objteachers.firstame + " " + objteachers.Hourlywage + " " + objteachers.email + " " + objteachers.YearofBirth + "</p>")
        }

    }



}
GetTeachers(2);



function Getfurniture(number) {
    for (var i = 0; i < number; i++) {
        var furniture = {};
        furniture.Name = prompt("enter name furniture ");
        furniture.brand = prompt("enter brand ");
        furniture.array = [prompt("enter name hanoiot ")];
        furniture.price = +prompt("enter price ");
        document.write("<br>"+ furniture.Name +"<br>");
        document.write("<br>"+ furniture.array +"<br>");

    }
}
Getfurniture(2);



function getApartment(number) {
    for (var i = 0; i < number; i++) {
        var getApartment = {};
        getApartment.address = prompt("enter Address");
        getApartment.rentalprice = +prompt("enter Rental price");
        getApartment.buyingprice = +prompt("enter Buying price");
        getApartment.interestedinanapartment = [prompt("enter Interested in an apartment"),prompt("enter Interested in an apartment")];
        getApartment.istheremediation = confirm("Is there mediation?")

        if (getApartment.istheremediation == false) {
            document.write(getApartment.address + "<br>" + getApartment.interestedinanapartment)
        }
    }
}
getApartment();



function getCountries(number) {
    for (var i = 0; i < number; i++) {
        var objgetCountries = {};
        objgetCountries.namecountries = prompt("enter name country");
        objgetCountries.numberofresidents = prompt("enter number of residents");
        objgetCountries.Cities = [prompt(" enter Cities")];
        objgetCountries.chabadHouse = confirm("Is there a Chabad house?")
        if (objgetCountries.chabadHouse == true) {
            document.write(objgetCountries.namecountries + "<br>" + objgetCountries.Cities);
        }

    }
}
getCountries(1);




function getmovies() {
    var getnumber = +prompt("enter number")
    for (var i = 0; i < getnumber; i++) {
        var movies = {};
        movies.namemovi = prompt("enter name movie");
        movies.numberwatch = +prompt("enter number whtch");
        movies.yearmovie = +prompt("enter year movie");

    }
}
getmovies();