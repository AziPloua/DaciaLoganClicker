let count = 0
const scoreLabel = document.getElementById('score')
const pozaLoganButton = document.getElementById('pozaLogan')
const sound = document.getElementById('sound')

document.getElementById('pozaLogan').onclick = function butonmare() {
    count += 100
    document.getElementById('score').innerHTML = count
    count.toLocaleString('de-DE')
    const nrVirgula = count.toLocaleString()
    document.getElementById('score').textContent = nrVirgula
    sound.play()
    verificaDaciile()
    animatieCount()
    updateCount()
    saveLoganuri()
}

function animatieCount() {
    scoreLabel.style.fontSize = '65px'
    setTimeout(() => {
        scoreLabel.style.fontSize = '50px' // Reset the font size
    }, 100)
}

document.getElementById('stopSong').onclick = function () {
    sound.pause()
}

const toggleMusicButton = document.getElementById('toggleMusic')
const backgroundMusic = document.getElementById('backgroundMusic')

// Function to toggle mute/unmute
function toggleMute() {
    if (sound.muted) {
        sound.muted = false // Unmute the music
        toggleMusicButton.textContent = 'Mute Music' // Update the button text
    } else {
        sound.muted = true // Mute the music
        toggleMusicButton.textContent = 'Unmute Music' // Update the button text
    }
}

// Add event listener to the "Mute Music" button
toggleMusicButton.addEventListener('click', toggleMute)

const dacia1 = document.getElementById('dacia1')
const upgradeDacia = 100

function verificaDaciile() {
    if (count >= upgradeDacia) {
        dacia1.style.visibility = 'visible'
    } else {
        dacia1.style.visibility = 'hidden'
    }
    saveLoganuri()
}

const tuneazaDacia1 = 10 + count
let dacia1Pressed = true

document.getElementById('dacia1').onclick = function () {
    if (dacia1.onclick) {
        document.getElementById('pozaLogan').onclick = function () {
            count += tuneazaDacia1
            scoreLabel.innerHTML = count
            updateCount()
            animatieCount()
        }
        buyLogan()
    }
}

function buyLogan() {
    if (count >= 500) {
        count -= 500
        dacia1.style.visibility = 'hidden'
        updateCount()
        animatieCount()
    } else {
        alert('Iti trebuie 500 Loganuri!')
        pozaLoganButton.onclick = function () {
            count += 1
            scoreLabel.innerHTML = count
            updateCount()
            animatieCount()
        }
        saveLoganuri()
    }
}
function updateCount() {
    scoreLabel.textContent = count
}

/*save things*/

function saveLoganuri() {
    localStorage.setItem('count', count)
    localStorage.setItem('verificaDaciile', JSON.stringify(data.dacia1))
}

function loadLoganuri() {
    const savedCount = localStorage.getItem('count')

    if (savedCount !== null) {
        // If a value was found in localStorage, parse it as an integer and assign it to your count variable
        count = parseInt(savedCount, 10)
    }
}

function init() {
    // Load the count from localStorage
    loadLoganuri()
    // Update the displayed count with formatting
    updateCount()
}

init()

const resetDacii = 0

/* when i press resetDacii, dacia1 should also reset
 */

document.getElementById('resetDacii').onclick = function () {
    count = 0
    document.getElementById('score').innerHTML = count
    updateCount()
    resetGame()
}

function resetGame() {
    // Clear all data in localStorage
    localStorage.clear()
    // Reload the page to start the game from the beginning
    location.reload()
}
