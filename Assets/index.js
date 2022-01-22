
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn')
    const   tip = document.querySelector('.tip')
    const   total = document.querySelector('.total')
    const   error = document.querySelector('.error')
    const reset = document.querySelector('.reset')
    const hideError = ()=>{
        setTimeout(()=>{
            error.style.display="none";  
        },5000)
    }

    
    const tipCalculator = () => {
        const bill = document.querySelector('.bill').value;
        const rate = document.querySelector('.rate').value;
        if (bill === "" || rate === "0") {
           error.style.display="block";
           hideError();
        }else if(isNaN(bill)){
            error.innerHTML = "Please Enter a number";
            error.style.display="block";
            hideError();

        }else if(bill<0){
            error.innerHTML = "Please Enter Valid number";
            error.style.display="block";
            hideError();
        }else{
            let tipAmt = bill*rate;
            tipAmt= Math.ceil(tipAmt)
            tip.innerHTML=`₹ ${tipAmt}`;

            let totalBill = parseInt(bill) + parseInt(tipAmt)
            total.innerHTML=`₹ ${totalBill}`;
        } 
    }
    btn.addEventListener('click', tipCalculator)


    const resetAmt=()=>{
    
            document.querySelector('.bill').value ="";
            document.querySelector('.rate').value =0;
            tip.innerHTML=0; 
            total.innerHTML=0;  
    }
    reset.addEventListener('click',resetAmt)
});
