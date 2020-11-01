// Code your solutions in this file

function writeCards(arrayOfPeople, party){
    const message = []

    for(let i = 0; i < arrayOfPeople.length; i++){
        message.push(`Thank you, ${arrayOfPeople[i]}, for the wonderful ${party} gift!`)
    }
    return message
}


countDown = (num) => {
    while(num >= 0) {
        console.log(num)
    num--
    }
}