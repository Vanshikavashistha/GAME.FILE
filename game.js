/*let userscore=0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score")
const gencompchoice=()=>{
    const options = ["rock","paper","scissors"];
   const randidx= Math.floor(Math.random()*3);
   return options[randidx];
}
const drawgame = ()=>{
    //console.log("game was draw");
    msg.innerText="game was draw play again";
     msg.style.backgroundcolour="#081b31;"

};
const showWinner=(userwin,userchoice,compchoice)=>{
       if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
       // console.log("you win");
        msg.innerText="you win";
        msg.style.backgroundcolour="green"
       }else{
        compscore++;
        compscorepara.innerText=compscore;
       // console.log("you lost");
        msg.innerText="you lost";
         msg.style.backgroundcolour="red"
       }
}

const playgame = (userchoice)=>{
    console.log("user choice=",userchoice);
    //generate computer choice
    const compchoice= gencompchoice();
    console.log("comp choice=",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice==="rock"){
           userwin= compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else {
           userwin= compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // isska mtlb ki hmne event listener add kia hai taki jasi hi koi choice pr click kia jaye to aye yeh message aye
    });
});*/
let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawgame = () => {
    msg.innerText = "Game was a draw, play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You lost!";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("Comp choice =", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
