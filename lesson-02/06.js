let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let bobryisk = {...passportWithAddress};

bobryisk.city = "Bobryisk";

console.log(bobryisk.city);