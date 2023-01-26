const date=new Date()
    document.getElementById('show-date').innerText=date.toLocaleDateString()

function getInputValue(feildId){
    const inputFeild = document.getElementById(feildId)
    const valueInText = inputFeild.value;
    const value = parseFloat(valueInText);
    inputFeild.value = '';
    return value;

}

function updateTotal(feildId,amount){
  
    const totalTag = document.getElementById(feildId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal+amount;
    totalTag.innerText=newTotal;
    return newTotal;

}

function updateBlanceTotal(amount,isAdd){
const balanceTag = document.getElementById('balance-total');
const blanceInText= balanceTag.innerText;
const previousBalance = parseFloat(blanceInText);
let newBlance;
if(isAdd==true){
     newBlance = previousBalance+amount;
}
else{
     newBlance = previousBalance-amount;
}

balanceTag.innerText=newBlance;

}


document.getElementById("deposit-button").addEventListener('click',function(){

    const amount = getInputValue('deposit-input');
   
   if(amount>0){
    const depositTotal= updateTotal('deposit-total',amount);

    const BlanceTotal = updateBlanceTotal(amount,true);
   }


});

// Handel Withdraw Button

document.getElementById("withdraw-button").addEventListener('click',function(){

    const amount = getInputValue('withdraw-input');
    console.log(amount);

   if(amount>0){
    const depositTotal= updateTotal('withdraw-total',amount);

    const BlanceTotal = updateBlanceTotal(amount,false);
   }

});