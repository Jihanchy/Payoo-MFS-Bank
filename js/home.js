document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('gredg')
    let moneyInput = document.getElementById('add-money-input').value;
    let numberMoney = parseFloat(moneyInput)
    // console.log(numberMoney)
    const pinInput = document.getElementById('pin').value;
    // console.log(pinInput)
    if(pinInput === '1234'){
        let currentBalance = document.getElementById('current-balance').innerText;
        let numberBalance = parseFloat(currentBalance)
        numberBalance = numberBalance + numberMoney
        document.getElementById('current-balance').innerText = numberBalance
    }else{
        alert('try again')
    }

    
})