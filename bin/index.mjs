#! /usr/bin/env node
import randomInteger from "random-int";  //importing user input library and random library
import PromptSync from "prompt-sync";

//choices
let choices = ["rock","paper","scissors"];
//show choices to user
let userprompt  = "enter 0 for rock , 1 for paper and 2 for scissors : ";
let outcome = "nothing yet";

//computer chooses random number from 0 to 2
let computer_choice = randomInteger(0,2);
//variable computer_choice read indexs of choices to randomly choice an index 0 to 2
computer_choice = choices[computer_choice];
do{
//prompt the user for an input 
const prompt = PromptSync();
//storing variable user prompt text to show up as input choice
let user_input = prompt(userprompt);
//user chooses an index number from 0 to 2 available
let user_choice = choices[user_input];
if(computer_choice === user_choice){
    outcome = "Draw";
} else if (computer_choice === "rock" && user_choice === "scissors"){
    outcome = "Player wins"
}else if (computer_choice === "paper" && user_choice === "rock"){
    outcome = "computer wins"
}else if (computer_choice === "paper" && user_choice === "scissors"){
    outcome = "Player wins"
}else if (computer_choice === "scissors" && user_choice === "rock"){
    outcome = "Player wins"
}else if (computer_choice === "scissors" && user_choice === "paper"){
    outcome = "computer wins"
}
console.log('Computer chooses : '+computer_choice);
console.log('Player chooses : '+user_choice);
console.log(outcome);
var ask = prompt("wnna play again ? yes or no ?  ");
}while(ask !== "no")

console.log("\nThankYou FOr playing the Game Comback Leter !")
