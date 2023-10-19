let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passport2 = {...passport};
passport2.name = "Ivan";

console.log(passport2);
console.log(passport);