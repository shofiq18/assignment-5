document.getElementById('feni-donate-now-btn')
.addEventListener('click', function(event) {
    event.preventDefault();

    const donateNow = getInputFieldValueById('feni-input-donate-money');
    console.log(donateNow);
    
    // wrong way to verify
    if(!isNaN(donateNow) && donateNow > 0){
        const donateBalance = getTextFieldValueById('feni-total-donate-balance');
        const accountBalance = getTextFieldValueById('account-balance');
        if(isNaN(donateBalance) || isNaN(accountBalance)) {
            alert('Error: Invalid values.');
            return;
        }
        const newDonateBalance = donateBalance + donateNow;
        const newAccountBalance = accountBalance - donateNow;

        if(newAccountBalance >= 0){
            document.getElementById('feni-total-donate-balance').innerText = newDonateBalance;
            document.getElementById('account-balance').innerText = newAccountBalance;
    
           }
           else{
                alert('Failed to donate: Insufficient account balance.')
           }

  
        

    }
    else{
        alert('Failed to donate: Please enter a valid amount.')
    }
   



})