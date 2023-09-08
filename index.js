let count = 0;
const scoreLabel = document.getElementById("score");
const pozaLoganButton = document.getElementById("pozaLogan");
const sound = document.getElementById("sound");


 document.getElementById("pozaLogan").onclick = function butonmare(){
    count+=1;
    count.toLocaleString("de-DE");
    document.getElementById("score").innerHTML = count;
    const nrVirgula = count.toLocaleString();
    document.getElementById("score").textContent = nrVirgula;
    animatieCount();
    sound.play();
    verificaDaciile(); 
 };

 function animatieCount(){
    scoreLabel.style.fontSize = "65px";
    setTimeout(() => {
        scoreLabel.style.fontSize = "50px"; // Reset the font size
    }, 100);
 }

 document.getElementById("stopSong").onclick = function(){
    sound.pause();
 };

const toggleMusicButton = document.getElementById("toggleMusic");
    const backgroundMusic = document.getElementById("backgroundMusic");

    // Function to toggle mute/unmute
    function toggleMute() {
        if (sound.muted) {
            sound.muted = false; // Unmute the music
            toggleMusicButton.textContent = "Mute Music"; // Update the button text
        } else {
            sound.muted = true; // Mute the music
            toggleMusicButton.textContent = "Unmute Music"; // Update the button text
        }
    }

    // Add event listener to the "Mute Music" button
    toggleMusicButton.addEventListener("click", toggleMute);

const dacia1 = document.getElementById("dacia1");
const upgradeDacia = 100;

function verificaDaciile(){
    if (count >= upgradeDacia) {
        dacia1.style.visibility = "visible";
    } else {
        dacia1.style.visibility = "hidden";
    } 
}


const tuneazaDacia1 = 10 + count;
let dacia1Pressed = true;

    document.getElementById("dacia1").onclick = function(){
        if(dacia1.onclick){
            document.getElementById("pozaLogan").onclick = function(){
                count+= tuneazaDacia1;
                scoreLabel.innerHTML = count;
                 updateCount();
                animatieCount();
                
            }   
               buyLogan();
        }  
         
    }


        function buyLogan(){
    if (count >= 500) {
        count -= 500; 
        dacia1.style.visibility = "hidden";
             updateCount();
             animatieCount();
    } else {       
       alert("Iti trebuie 500 Loganuri!");
       pozaLoganButton.onclick = function(){
        count+=1;
        scoreLabel.innerHTML = count;
        updateCount();
          }
         }          
        }

    function updateCount(){
        scoreLabel.textContent = count;
    }

