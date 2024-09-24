document.getElementById('donate-now-btn')
.addEventListener('click', function(event) {
    event.preventDefault();

    const donateNow = getInputFieldValueById('input-donate-money');
        
 
    
    
    // wrong way to verify
    if(!isNaN(donateNow) && donateNow > 0){
        const donateBalance = getTextFieldValueById('total-donate-balance');
        const accountBalance = getTextFieldValueById('account-balance');
        if(isNaN(donateBalance) || isNaN(accountBalance)) {
            alert('Error: Invalid values.');
            document.getElementById('input-donate-money').value = ''; // Clear the input field
            return;
        }
        const newDonateBalance = donateBalance + donateNow;
        const newAccountBalance = accountBalance - donateNow;

       if(newAccountBalance >= 0){
        document.getElementById('total-donate-balance').innerText = newDonateBalance;
        document.getElementById('account-balance').innerText = newAccountBalance;

        // add history button transaction 
        const date = new Date()
        
        const div = document.createElement('div');
        div.classList.add('bg-white', 'p-4', 'rounded-lg', 'border-solid', 'border-2', 'border-gray-100');
        div.innerHTML = `

        <P class="font-semibold text-gray-800 mb-2 text-2xl">${donateNow} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</P>
        <div> 
        <P class="font-normal text-xl">${date} </P>

        <div/>`

        document.getElementById('history-container').appendChild(div);
        


       }
       else{
            alert('Failed to donate: Insufficient account balance.')
       }
       
       document.getElementById('input-donate-money').value = '';
  
        

    }
    else{
        alert('Failed to donate: Please enter a valid amount.')
        document.getElementById('input-donate-money').value = '';
    }
   



})

 