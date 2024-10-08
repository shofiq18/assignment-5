document.addEventListener('DOMContentLoaded', function(){
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');


    // Donation button

    donationBtn.addEventListener('click', function(){
        donationBtn.classList.toggle('bg-green');
        donationBtn.classList.toggle('bg-slate-50');
        historyBtn.classList.remove('bg-[#B4F461]');
        historyBtn.classList.add('bg-slate-50');
    });


    // History button

    historyBtn.addEventListener('click', function(){
        historyBtn.classList.toggle('bg-green');
        historyBtn.classList.toggle('bg-slate-50');
        donationBtn.classList.remove('#B4F461');
        donationBtn.classList.add('bg-slate-50');
    });
});
