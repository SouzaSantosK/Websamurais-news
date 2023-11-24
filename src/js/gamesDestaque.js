const one = document.querySelector('.column .one');
const two = document.querySelector('.column .two');
const three = document.querySelector('.column .three');
const four = document.querySelector('.column .four');
const five = document.querySelector('.column .five');

const destaque = document.querySelector('.main-carousel');

one.addEventListener('click', () => {
    destaque.style.backgroundImage = "url('../../img/diablo.avif')";
    destaque.childNodes[1].childNodes[1].src = "../../img/diablo-name.avif"
    destaque.childNodes[1].childNodes[1].style.width = '300px'
    destaque.childNodes[1].childNodes[3].innerText = "The endless battle between the High Heavens and the Burning Hells rages on as chaos threatens to consume Sanctuary. With ceaseless demons to slaughter, countless Abilities to master, nightmarish Dungeons, and Legendary loot. Survive and conquer darkness - or succumb to the shadows."
});

two.addEventListener('click', () => {
    destaque.style.backgroundImage = "url('../../img/fifa.avif')";
    destaque.childNodes[1].childNodes[1].style.width = '200px'
    destaque.childNodes[1].childNodes[1].src = "../../img/fifa-name.avif"
    destaque.childNodes[1].childNodes[3].innerText = "Get ready for FIFA 24, the pinnacle of virtual soccer. With stunning graphics, refined gameplay, and an extensive lineup of teams and modes, experience the passion of football like never before. Dominate the pitch and immerse yourself in the most authentic football simulation yet!"
});

three.addEventListener('click', () => {
    destaque.style.backgroundImage = "url('../../img/thelastofus.jpg')";
    destaque.childNodes[1].childNodes[1].src = "../../img/thelastofus-name.png"
    destaque.childNodes[1].childNodes[1].style.width = '100px'
    destaque.childNodes[1].childNodes[3].innerText = "The Last of Us presents a gripping tale of survival in a post-apocalyptic world. Follow Joel and Ellie's emotionally charged journey, navigating dangers, and making tough choices in a hauntingly beautiful landscape. Uncover the depth of human resilience and sacrifice in this acclaimed, narrative-driven masterpiece"
});

four.addEventListener('click', () => {
    destaque.style.backgroundImage = "url('../../img/reddead.jpg')";
    destaque.childNodes[1].childNodes[1].src = "../../img/reddead-name.png"
    destaque.childNodes[1].childNodes[1].style.width = '300px'
    destaque.childNodes[1].childNodes[3].innerText = "Red Dead Redemption 2 transports you to the rugged Wild West, offering an immersive open-world experience. Become Arthur Morgan, a complex outlaw, navigating moral dilemmas and engaging in thrilling gunfights amidst stunning landscapes. Explore a richly detailed world, filled with gripping stories, dynamic encounters, and the allure of the untamed frontier."
});

five.addEventListener('click', () => {
    destaque.style.backgroundImage = "url('../../img/cyberpunk.jpg')";
    destaque.childNodes[1].childNodes[1].style.width = '400px'
    destaque.childNodes[1].childNodes[1].src = "../../img/cyberpunk-name.png"
    destaque.childNodes[1].childNodes[3].innerText = "Cyberpunk 2077 thrusts you into a breathtaking dystopian future. Step into Night City as V, a mercenary navigating a world of high-tech gadgets, moral ambiguity, and corporate intrigue. Immerse yourself in a visually stunning, neon-lit landscape while shaping your own destiny in a narrative-driven, action-packed RPG experience."
});