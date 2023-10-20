let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let qwerty = {...passportWithAddress};
qwerty.address.city = "Bobryisk";

console.log(qwerty.address.city);
console.log(passportWithAddress.address.city);