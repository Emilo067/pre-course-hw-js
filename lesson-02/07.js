
let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};



let passportMarried2 = {...passportWithAddress, married: true, address: {...passportWithAddress.address}}

console.log(passportMarried);
console.log(passportMarried2);


