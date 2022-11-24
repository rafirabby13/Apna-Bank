const loginBtn=document.getElementById("loginBtn");
loginBtn.addEventListener('click', function () 
{
    const loginArea=document.getElementById("login-area");
    //loginArea.remove();
    loginArea.style.display="none";
    const transactionArea=document.getElementById("transactionArea");
    transactionArea.style.display="block";
})


//doing 
const depositBtn=document.getElementById("depositBtn");
depositBtn.addEventListener('click', function() {
    const depositAmount=document.getElementById("depositAmount").value;
    // const currentDeposit=document.getElementById("currentDeposit").innerHTML= depositAmount;
    const depositNumber=parseFloat(depositAmount);//strintg to number
    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit=depositNumber+currentDepositNumber;
    document.getElementById("currentDeposit").innerText=totalDeposit;
//balance section
const currentBalance=document.getElementById("currentBalance").innerText;
const currentBalanceNumber=parseFloat(currentBalance);
const totalBalance=currentBalanceNumber+depositNumber;
document.getElementById("currentBalance").innerText=totalBalance;

})

const withdrawBtn=document.getElementById("withdrawBtn");
withdrawBtn.addEventListener('click', function () {
    const currentWithdraw=document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber=parseFloat(currentWithdraw);
    const withdrawAmount=document.getElementById("withdrawAmount").value;
    console.log(withdrawAmount);
    const withdrawAmountNumber=parseFloat(withdrawAmount);
    // const totalWithdraw=currentWithdrawNumber+withdrawAmountNumber;
    // document.getElementById("currentWithdraw").innerText=totalWithdraw;

    //totalamount
    const currentBalance=document.getElementById("currentBalance").innerText;
const currentBalanceNumber=parseFloat(currentBalance);
if (currentBalanceNumber>withdrawAmountNumber) {
    const totalWithdraw=currentWithdrawNumber+withdrawAmountNumber;
    document.getElementById("currentWithdraw").innerText=totalWithdraw;
    
const totalBalance=currentBalanceNumber-withdrawAmountNumber;
document.getElementById("currentBalance").innerText=totalBalance;
}
else
{
    alert("You don't have enough balance");
}
 
})