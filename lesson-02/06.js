// code

let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};



let copyPassport = {...passportWithAddress, address: {...passportWithAddress.address, city: 'Bobryisk'}}

console.log(passportWithAddress.address.city)
console.log(copyPassport.address.city)


