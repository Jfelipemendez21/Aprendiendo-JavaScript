var books= ['123','345','4565','565'];

function bookExist (id){
    return books.includes(id)
}

console.log(bookExist('123'));