const button=document.getElementById("clickButton");
button.addEventListener("click", checkHoroscope);
function checkHoroscope(){
    const month= Number(document.getElementById('month').value);
    const day= Number(document.getElementById('day').value);
let result="";
if((month===3 && day >=21) || (month===4 && day <=20))
{
    result="Aries";
}
else if((month===4 && day >=21) || (month===5 && day <=21))
{
    result="Taurus";
}
else if((month===5 && day >=22) || (month===6 && day <=21))
{
    result="Gemini";
}
else if((month===6 && day >=22) || (month===7 && day <=22))
{
    result="Cancer";
}
else if((month===7 && day >=23) || (month===8 && day <=21))
{
    result="Leo";
}
else if((month===8 && day >=22) || (month===9 && day <=23))
{
    result="Virgo";
}
else if((month===9 && day >=24) || (month===10 && day <=23))
{
    result="Libra";
}
else if((month===10 && day >=24) || (month===11 && day <=22))
{
    result="Scorpio";
}
else if((month===11 && day >=23) || (month===12 && day <=22))
{
    result="Sagittarius";
}
else if((month===12 && day >=23) || (month===1 && day <=20))
{
    result="Capricorn";
}
else if((month===1 && day >=21) || (month===2 && day <=19))
{
    result="Aquarius";
}
else if((month===2 && day >=20) || (month===3 && day <=20))
{
    result="Pisces";
}
else{
    result="Not A Valid DOB!"
}
console.log(`Your Horoscope is: ${result} :)`);
}