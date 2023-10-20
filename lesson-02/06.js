let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let qwerty = JSON.parse(JSON.stringify(passportWithAddress));
qwerty.address.city = "Bobryisk";

console.log(passportWithAddress.address.city); 
console.log(qwerty.address.city);
