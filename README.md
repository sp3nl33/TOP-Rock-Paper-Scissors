# TOP-Rock-Paper-Scissors
This is a project from TOP that involves me making rock, paper, scissors.

This project used the following:

-if conditions
-else if conditions
-else conditions
-&& and || conditions
-functions
-Declaring variables using "let"
-Declaring constants
-Functions with parameters
-return statements
-Turning a variable into a string
-Making a string lowercase
-Console logs
-Counters with ++ and --
-Prompts
-Alerts

I definitely had to do some extra research on this project, and there's still things I'm not 100% sure about how they work. Why does my playRound function need parameters if I declare a value and use return in a function to give that value new data? Why does the playRound function need a function as a parameter to get new values every time it's run in the game() function? Why am I getting an extra prompt that has no effect on the game before the game actually starts? These things are still a mystery to me, but I did do some things better than I thought I would before starting the project.

Part of the concept of a return value instantly clicked at some point, and I realized that I was putting my return value too locally in a function (at the end of an . if statement instead of the function as a whole). Initially, I overcomplicated the concept of getting the console to recognize rock, paper, or scissors, and how it would determine which trumps the other, but I realized I could get around this by doing && or || statements. The counter to measure how many points each contestant had by the end of the game was also easier than I thought, and that worked without any issues. 

Finally, this project taught me how important researching is. I used all of my resources before asking a question, and I actually did find the exact answer to a problem I was having...sort of. Initially, my playRound function was just playRound() without any parameters, since I ran functions to get the player choice and the computer choice within the playRound() function. I assumed that the values I needed for player choice and computer choice would be updated, and would then be used in the following if statements. However, games always ended in a draw, and I learned that this was because the values would be undefined. I established the values earlier in the script, but they were assigned to nothing. While I can understand that locally they were undefined, I'm still confused as to why they no longer become undefined if they are defined within a function that resides within another function. Maybe it's just a Javascript thing. Lesson learned, hopefully...