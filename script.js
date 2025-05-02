let msgScore=0;
let UserScore=0;
const choises=document.querySelectorAll(".choise")
const massege=document.querySelector('#msg')

const UserScorepara=document.querySelector("#userScore")
const comScorepara=document.querySelector("#computerScore")


const ComputerChoise=()=>{
    let options=["rock","paper","seciser"];
   let randomChoise= Math.floor(Math.random()*3)
   return options[randomChoise]
}
const DrawGame=()=>{
    console.log("game was Draw")
    massege.innerText="Game was Draw,Play Again!!"
    massege.style.backgroundColor="#081b31"

}


const showWinner=(userWin,userChoise,comChoise)=>{
    if(userWin){
        UserScore++;
        UserScorepara.innerText=UserScore
        // console.log("you win")
        massege.innerText=`you win your ${userChoise} beat ${comChoise}`
        massege.style.backgroundColor="green"
    }else{
        msgScore++;
        comScorepara.innerText=msgScore
        // console.log("you lose")
        massege.innerText=`you loser  ${comChoise} beat your ${userChoise}   `
        massege.style.backgroundColor="red"

    }
}

const PlayGame=(userChoise)=>{
// console.log("user choise",userChoise)
// genrate computer choise
const comChoise=ComputerChoise()
// console.log("computer choise",comChoise)
if(userChoise===comChoise){
DrawGame()
}else{
    let userWin=true
    if(userChoise==="rock"){
        userWin=comChoise==="paper"?false:true
    }else if(userChoise==="paper"){
       userWin= comChoise==="seciser"?false:true
    }else{
        userWin=comChoise==="rock"?false:true
    }
    showWinner(userWin,userChoise,comChoise)
}
}


choises.forEach((choise)=>{
    // console.log(choise)
    choise.addEventListener("click",()=>{
        const userChoise=choise.getAttribute("id")
    // console.log("choise was clicked",userChoise)
    PlayGame(userChoise)
    }) ;
});
