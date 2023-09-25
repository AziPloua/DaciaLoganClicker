let count = 0;
const scoreLabel = document.getElementById("score");
const pozaLoganButton = document.getElementById("pozaLogan");
const sound = document.getElementById("sound");


 document.getElementById("pozaLogan").onclick = function butonmare(){
    count+=100;
   document.getElementById("score").innerHTML = count;
    count.toLocaleString("de-DE");
    const nrVirgula = count.toLocaleString();
    document.getElementById("score").textContent = count;
    sound.play();
    verificaDaciile();
   animatieCount(); 
   updateCount();
    
 };

 function animatieCount(){
    scoreLabel.style.fontSize = "65px";
    setTimeout(() => {
        scoreLabel.style.fontSize = "50px"; // Reset the font size
    }, 100);
 }

const toggleMusicButton = document.getElementById("toggleMusic");
const backgroundMusic = document.getElementById("backgroundMusic");

    // Function to toggle mute/unmute
    function toggleMute() {
        if (currentAudio.muted) {
            currentAudio.muted = false; // Unmute the music
            toggleMusicButton.textContent = "Mute Music"; // Update the button text
        } else {
            currentAudio.muted = true; // Mute the music
            toggleMusicButton.textContent = "Unmute Music"; // Update the button text
        }
    }

    // Add event listener to the "Mute Music" button
    toggleMusicButton.addEventListener("click", toggleMute);

const dacia1 = document.getElementById("dacia1");
const upgradeDacia = 100;

function verificaDaciile(){
    if (localStorage.getItem("verificaDaciile") !== "true") {
    if (count >= upgradeDacia) {
        dacia1.style.visibility = "visible";
    } else {
        dacia1.style.visibility = "hidden";
      } 
    }
 saveLoganuri();   
}

let tuneazaDacia1 = 10;
let dacia1Pressed = true;

    document.getElementById("dacia1").onclick = function(){
        if(dacia1.onclick){
            document.getElementById("pozaLogan").onclick = function(){
                count+= tuneazaDacia1;
                scoreLabel.innerHTML = count;
                localStorage.setItem("daciaClicked", "true");
                 updateCount(); 
                 animatieCount();   
            }   
             buyLogan();             
          } 
          saveLoganuri();
    }


        function buyLogan(){
    if (count >= 500) {
        count -= 500;
        localStorage.setItem("verificaDaciile","true");
        dacia1.style.visibility = "hidden";   
        animatieCount();
        saveLoganuri(); 
        updateCount();
    } else {       
       alert("Iti trebuie 500 Loganuri!");
       pozaLoganButton.onclick = function(){
        count+=1;
        scoreLabel.innerHTML = count;
        updateCount();
       animatieCount();
       saveLoganuri();
       }
       saveLoganuri();
    }  
    saveLoganuri();
}

 function updateCount(){
        scoreLabel.textContent = count;
    }

    /*save things*/

function saveLoganuri(){
    localStorage.setItem("count", count);
    localStorage.setItem("dacia1Pressed", tuneazaDacia1);
}

function loadLoganuri() {
    const savedCount = localStorage.getItem("count");
    const hasBoughtLogan = localStorage.getItem("verificaDaciile") === "true";
if (hasBoughtLogan){
    count += 10;
}
    else if (savedCount !== null) {
        // If a value was found in localStorage, parse it as an integer and assign it to your count variable
        count = parseInt(savedCount, 10);
        
    }
}

function init() {
    // Load the count from localStorage
    loadLoganuri();
    // Update the displayed count with formatting
    updateCount();
}

init();

const resetDacii = 0;

/* when i press resetDacii, dacia1 should also reset 
 */

document.getElementById("resetDacii").onclick = function(){
    count = 0;
    document.getElementById("score").innerHTML = count;
    updateCount();
resetGame();
}

function resetGame() {
    // Clear all data in localStorage
    localStorage.clear();
    // Reload the page to start the game from the beginning
    location.reload();
  }


const nextManea = document.getElementById("nextManea");
const sound2 = document.getElementById("sound2");
let currentAudio = sound;

const songs = [
    'onlymp3.to - Vitezomanu Gica Conduc Dacia Logan-hx7Fr6_v1gw-192k-1694019143.mp3',
     'onlymp3.to - NICOLAE GUTA imi iau Logan-nC9yCxwvX1c-192k-1694180393.mp3',
     "onlymp3.to - eu merg cu dacia iar tu pe jos-nac8hcO_Ono-192k-1694800535.mp3",
     "onlymp3.to - carlos x cavs CONDUC LOGAN bad boujee remix -pTlfJZv2YlU-192k-1694800140.mp3",
     "onlymp3.to - Dacia Logan-tc5prhtpgGs-192k-1694800304.mp3",
     "Ciprian Pricob - DACIA LOGAN (Official Video).mp3",
     "onlymp3.to - The Dean Dacia Logan prod. Ketta -_CJlqfR4mgo-192k-1694800433.mp3",
    ];

    let currentSongIndex = 0;

    // Function to play the next song
  nextManea.onclick = function playNextSong() {
        if (currentSongIndex < songs.length - 1) {
            currentSongIndex++;
        } else {
            currentSongIndex = 0; // Loop back to the first song if at the end
        }
        currentAudio.src = songs[currentSongIndex];
        currentAudio.play();
    }
    
