# Chat_MongoDB
Simple chat app using sockets and MongoDB
## Goals
-[x] Choose a username

-[x] Be able to send messages to everyone

-[x] Every message has a timestamp and the username of the persone who sent it

-[x] Message history is displayed to all

-[x] Messages display in ascending order from the more recent message at the bottom to the oldest at the top

-[x]  Simple but effective UX design

-[x] Bonus : Use MVC Structure 

-[x] Bonus : Use Firebase to connect to Github

## Process
We set on using a tutorial found on youtube as the video had a link to a Github repository. This way we could save some time by directly taking the code from the repo and adapting it to our needs. 

Connecting to mongoDB via Mongoose prooved a bit difficult but manageable once we became more accustomed to the mongoDB GUI.

Displaying the timestamp was also a difficulty as the new Date() method had to be launched every time message was sent to the server and the value had to be saved on said server so it would not change with each refresh of the page.

Lastly connecting to Firebase and getting users info was also a challenge since it was a new architecture for us to learn and several auth bugs dragged on the process. However we overcame the problems and finished the exercice.

BUG : There's a known bug we didn't take the time to fix. When a message is sent in the chat, the text area where the message was written should clear itself automatically. At 
random intervals, it won't. The only course of action is to close the web page and relaunch the server. It may fix the issue but most of the time this bug will be present.
## Members of the team
- Anthony Vandersmissen
- Olivier Loriaux
- Vincent De Gheyndt

We would like to thank **Cleo Buck** and **Corentin De Block** for their help regarding the timestamp and MongoDB respectively.

### Video Tutorial
The link to the first part of the video tutorial :
https://www.youtube.com/watch?v=8Y6mWhcdSUM

### Our chat

https://chatbecode1.herokuapp.com/
