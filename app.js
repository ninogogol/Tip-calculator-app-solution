const reset = document.querySelector('.reset');
reset.addEventListener('click', resetAll);

// This function resets all inputs and calculations
function resetAll() {
    
    function resetBill() {
        
        reset.style.backgroundColor = '#0D686D';
        reset.style.color = '#00474B';
        
        document.querySelector('.dollar').value = 0;
    }
    resetBill();
}