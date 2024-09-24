document.getElementById('quota-donate-now-btn')
.addEventListener('click', function(event) {
    event.preventDefault();

    const donateNow = getInputFieldValueById('quota-input-donate-money');
    console.log(donateNow);
    
    // wrong way to verify
    if(!isNaN(donateNow) && donateNow > 0){
        const donateBalance = getTextFieldValueById('quota-total-donate-balance');
        const accountBalance = getTextFieldValueById('account-balance');
        if(isNaN(donateBalance) || isNaN(accountBalance)) {
            alert('Error: Invalid values.');
            return;
        }
        const newDonateBalance = donateBalance + donateNow;
        const newAccountBalance = accountBalance - donateNow;

       if(newAccountBalance >= 0){
        document.getElementById('quota-total-donate-balance').innerText = newDonateBalance;
        document.getElementById('account-balance').innerText = newAccountBalance;

            // add history button transaction 
          const date = new Date()
        
          const div = document.createElement('div');
          div.classList.add('bg-white', 'p-4', 'rounded-lg', 'border-solid', 'border-2', 'border-gray-100');
          div.innerHTML = `
  
          <P class="font-semibold text-gray-800 mb-2 text-2xl">${donateNow} Taka is Aid for Injured in the Quota Movement</P>
          <div> 
          <P class="font-normal text-xl">${date} </P>
  
          <div/>`
  
          document.getElementById('history-container').appendChild(div);

       }
       else{
            alert('Failed to donate: Insufficient account balance.')
       }
  
        

    }
    else{
        alert('Failed to donate: Please enter a valid amount.')
    }
   



})