#! /usr/bin/env node

import inquirer from "inquirer";

const mypin = 1234;
let mybalance = Math.floor(Math.random() * 10000);
let isRunning = true

while(isRunning){
  let input = await inquirer.prompt([
    { message: "Please enter pin code", type: "number", name: "pincode" },
  ]);


  if (input.pincode === mypin) {
    let input2 = await inquirer.prompt([
      {
        message: "Select Service",
        type: "list",
        name: "services",
        choices: ["Withdraw Cash", "Deposit Cash", "Check Balance","Exit"],
      },
    ]);
    
    
    //----------------------------------Withdraw Block------------------------------
    if (input2.services === "Withdraw Cash") {
      let isrunning2 = true;
      while (isrunning2) {
        console.log(`Your Account Balance is $${mybalance}`)
        let amount = await inquirer.prompt([
          {
            message: "How much do you want to widthdraw",
            type: "number",
            name: "amount",
          },
        ]);
        if (amount.amount > mybalance) {
          console.log("Insufficient Balance please enter a valid amount");
        } else {
          console.log(`Here are your $${amount.amount}`);
          mybalance -= amount.amount;
          console.log(`Your account balance is now ${mybalance}`);
          isrunning2 = false;
        }
      }isRunning = false
    }
    //------------------------------------------------------------------------------
    
    
    
    
    
    //--------------------------Deposit Cash Block----------------------------------
    else if(input2.services==="Deposit Cash"){
        let depositAmount = await inquirer.prompt([{message:"Enter Deposit amount",type:"number",name:"dAmount",}])
        mybalance+=depositAmount.dAmount
        console.log(`$${depositAmount.dAmount} has been added to your account balance, Your current Balance is now $${mybalance}`)
        isRunning = false
    }
    //------------------------------------------------------------------------------

    

    
    
    //------------------------------Check Balance Block-----------------------------
    else if(input2.services==="Check Balance"){
        console.log(`Your current balance is $${mybalance}`)
        isRunning = false
    }
    //------------------------------------------------------------------------------
    




    //--------------------------------------Exit------------------------------------
    else if(input2.services==="Exit"){
        isRunning = false
    }
    //------------------------------------------------------------------------------

}else(
    console.log("Please Enter Correct Pin Code")
)
}