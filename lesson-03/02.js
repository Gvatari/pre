const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

const searchOrangeInArray = (array) => {
    return array.indexOf("апельсин") ? console.log("Ура! нашел") : console.log("Придется поискать в другом магазине…");
}

searchOrangeInArray(words);