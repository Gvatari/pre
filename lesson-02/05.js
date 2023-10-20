let passport = {
    name: "Petr",
    surname: "Petrov",
};

let qwe = {...passport};
qwe.name = "Ivan";

console.log(passport.name);
console.log(qwe.name);