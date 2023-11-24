data = [
    {
        name: "Dr. Stone",
        desc: "Thousands of years after a mysterious phenomenon turned the entire humanity into stone, an extraordinarily intelligent boy driven by science awakens - Senku Ishigami. Confronted with a world of stone and the widespread collapse of civilization, Senku decides to use his intellect to rebuild the world. Alongside Taiju Oki, his friend...",
        tags: ["Supernatural", "Science"],
        img: "../../img/drstone.png"
    },
    {
        name: "Tokyo Revengers",
        desc: "Hanagaki Takemichi lives an unsatisfying life right up until his death. Waking up 12 years in the past, he reckons with the eventual fate of his friends and tries to prevent an unfortunate future. Takemichi Hanagaki is a freelancer that's reached the absolute pits of despair in his life.",
        tags: ["Action", "Drama"],
        img: "../../img/tokyorevengers.png"
    },
    {
        name: "Chainsaw Man",
        desc: "Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils. When his father died, Denji was stuck with a huge debt and no way to pay it back.",
        tags: ["Action", "Supernatural", "Shounen"],
        img: "../../img/chainsawman.jpg"
    },
    {
        name: "Jujutsu Kaisen",
        desc: "Yuji Itadori, a kind-hearted teenager, joins his school's Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use. He hears about a cursed talisman - the finger of Sukuna, a demon - and its being targeted by other cursed beings. Yuji eats the finger to protect his friends, and ends up becoming Sukuna's host. However, Yuji discovers that he has inherited magic and is able to control this power without interference from Sukuna. He joins the Tokyo Metropolitan Magic Technical College to consumes all of Sukuna's fingers, which will enable a full exorcism to take place that will free him.",
        tags: ["Action", "Supernatural", "Shounen"],
        img: "../../img/jujutsukaisen.jpg"
    }
]

let actual = 0;

const back = document.querySelector('#back');
const forwards = document.querySelector('#foward');

const imgLocal = document.querySelector('.hero');
const h1 = document.querySelector('.hero .banner .content h1');
const synopsis = document.querySelector('.synopsis');
const tags = document.querySelector('.tags');

back.addEventListener('click', () => {
    actual--;
    if (actual < 0) actual = data.length-1;
    imgLocal.style.backgroundImage = `url(${data[actual].img})`;
    h1.innerHTML = data[actual].name;
    synopsis.innerHTML = data[actual].desc;
    tags.innerHTML = '';

    data[actual].tags.forEach(tag => {
        tags.innerHTML += "<span>"+tag+"</span>";
    });
})

forwards.addEventListener('click', () => {
    actual++;
    if (actual >= data.length) actual = 0;
    imgLocal.style.backgroundImage = `url(${data[actual].img})`;
    h1.innerHTML = data[actual].name;
    synopsis.innerHTML = data[actual].desc;
    tags.innerHTML = '';

    data[actual].tags.forEach(tag => {
        tags.innerHTML += "<span>"+tag+"</span>";
    });
})