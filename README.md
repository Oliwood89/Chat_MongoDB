# Chat_MongoDB
Simple chat app using sockets and MongoDB
## Goals
-[x] Choose a username

-[x] Be able to send messages to everyone

-[x] Every message has a timestamp and the username of the persone who sent it

-[x] Message history is displayed to all

-[x] Messages display in ascending order from the more recent message at the bottom to the oldest at the top
-[x]  Simple but effective UX design

-[] Bonus : Use MVC Structure 

-[] Bonus : Use Firebase to connect to Github

## Process
We set on using a tutorial found on youtube as the video had a link to a Github repository. This way we could save some time by directly taking the code from the repo and adapting it to our needs. 

Connecting to mongoDB via Mongoose prooved a bit difficult but manageable once we became more accustomed to the mongoDB GUI.

Displaying the timestamp was also a difficulty as the new Date() method had to be launched every time message was sent to the server and the value had to be saved on said server so it would not change with each refresh of the page.

Lastly connecting to Firebase and getting users infos was also a challenge since it was also a new architecture to learn for us.

## Members of the team
- Anthony Vandermissen
- Olivier Loriaux
- Vincent De Gheyndt

We would like to thank **Cleo Buck** and **Corentin De Block** for their help regarding the timestamp and MongoDB respectively.

### Video Tutorial
The link to the first part of the video tutorial :
https://www.youtube.com/watch?v=8Y6mWhcdSUM
