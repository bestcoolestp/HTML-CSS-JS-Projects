const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');

//https://emoji-api.com/

const emoji = [];

async function getEmoji() {
    let response = await fetch("http://emoji-api.com/emojis?access_key=3b6bbe4494a486692ffc934b719f53ecbd5d563f");
    let data = await response.json();
    
    for (let i = 0; i < 1500; i++) {
        emoji.push({
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName,
    });
    }
}

getEmoji();
console.log(emoji);

btnEl.addEventListener('click', () => {
    let random = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[random].emojiName;
    emojiNameEl.innerText = emoji[random].emojiCode;
} 
  );