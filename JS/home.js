// add money

document.getElementById('add-money').addEventListener('click', function(){
    const addAmount = getInputValue('amount')
    const pin = getInputValue('pin')

    if(pin === 1234){
      const currentBalance = getTextValue('current-amount')
      const newBalance = currentBalance + addAmount
      setValue('current-amount', newBalance);
     document.getElementById('amount').value = ''; 
     document.getElementById('pin').value = '';

      
    }
    else{
        alert('incorrect pin')
    }
})


// cash out

document.getElementById('withdraw-money').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-amount')
    const withdrawPin = getInputValue('withdraw-pin')

    if(withdrawPin === 1234){
      const currentBalance = getTextValue('current-amount')
      const newBalance = currentBalance - withdrawAmount 
      setValue('current-amount', newBalance);
     document.getElementById('withdraw-amount').value = ''; 
     document.getElementById('withdraw-pin').value = '';

      
    }
    else{
        alert('incorrect pin')
    }
})
