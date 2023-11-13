///variables month
///            day
///             button
const monthIn = document.getElementById('month')
const dayIn = document.getElementById('day')
const butt = document.getElementById('butto')

///function for checking the zodiac sign
function displayMessage(msg) {
    document.getElementById("result").innerText = msg;
}
function checkZodi() {
    console.log('is this thing on?')
    const month = Number(monthIn.value)
    const day = Number(dayIn.value)
    ///capicorn 12/22-1/19
if( month === 12 && day >= 22 || month === 1 && day <= 19 ){
displayMessage('Capicorn')
}
    ///aquarius 1/20-2/18
else if( month === 1 && day >= 20 || month === 2 && day <= 18 )
displayMessage('Aquarius')

 ///pisces 2/19-3/20
 else if( month === 2 && day >= 19 || month === 3 && day <= 20)
 displayMessage('Pisces')


  ///aries 3/21- 4/19
else if( month === 3 && day >= 21 || month === 4 && day <= 19 )
displayMessage('Aries')

 ///taurus 4/20-5/20
 else if( month === 4 && day >= 20 || month === 5 && day <= 20)
 displayMessage('Taurus')

  ///gemini 5/21-6/20
else if( month === 5 && day >= 21 || month === 6 && day <= 20)
displayMessage('Gemini (the best one')

///cancer 6/21-7/22
else if( month === 6 && day >= 21 || month === 7 && day <= 22)
displayMessage('Cancer')

 ///leo 7/23-8/22
 else if( month === 7 && day >= 23 || month === 8 && day <= 22)
 displayMessage('Leo')

  ///virgo 8/23-9/22
else if( month === 8 && day >= 23 || month === 9 && day <= 22)
displayMessage('Virgo (me too!)')

 ///libra 9/23-10/22
 else if( month === 9 && day >= 23 || month === 10 && day <= 22)
 displayMessage('Libra')

  ///scorpio 10/23-11/21
else if( month === 10 && day >= 23 || month === 11 && day <= 21)
displayMessage('Scorpio')

  ///sagittarius 11/22-12/21
else if( month === 11 && day >= 22 || month === 12 && day <= 21)
displayMessage('Sagittarius')


///cons log just to check if it is string or number
console.log(typeof month)
console.log(typeof day)
}
////conditions to use
/// if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
butt.addEventListener('click', checkZodi)