function startShow() {
    // 1. Hide the button
    document.getElementById('start-btn').style.display = 'none';
    
    // 2. Show the main content
    document.getElementById('main-container').style.display = 'flex';
    
    // 3. Play the music
    var audio = document.getElementById("bg-music");
    audio.play();

    // 4. Start the Rose Rain
    setInterval(createRose, 300); // Create a rose every 300ms
}

function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    
    // You can use an emoji 🌹 or an image tag here
    rose.innerText = '🌹'; 
    
    // Random horizontal position
    rose.style.left = Math.random() * 100 + "vw";
    
    // Random animation duration (falling speed) between 3s and 6s
    rose.style.animationDuration = Math.random() * 3 + 3 + "s";
    
    // Random size
    rose.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(rose);

    // Remove the rose from memory after it falls to keep browser fast
    setTimeout(() => {
        rose.remove();
    }, 6000);
}