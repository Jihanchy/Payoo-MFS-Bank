/***step -1*** add event listener in login btn****/
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const inputNumber = document.getElementById('input-number').value
    const inputPin = document.getElementById('input-pin').value
    if(inputNumber==='01613516358' && inputPin==='1557'){
        console.log('allow user to access this website')
        window.location.href='/home.html'
    }else{
        alert('wrong phone number or pin')
    }
 
})
