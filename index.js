const username="harshi";
const welcomemsg = document.getElementById("welcome-msg");
welcomemsg.textcontent += username === "" ? 'Guest' : username;