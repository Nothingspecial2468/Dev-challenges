const flipBtn = document.querySelector('.flip-btn');
const randomBtn = document.querySelector('.random-btn');
const coinId = document.getElementById('coin');
const result = document.getElementById('result');

flipBtn.addEventListener('click', flipCoin);
randomBtn.addEventListener('click', flipCoin);

function flipCoin(){
    const random = Math.floor(Math.random() * 2);
    const side = random === 0 ? 'heads' : 'tails';
    coinId.src = `resources/${side}.svg`;
    coinId.alt = side === 'heads' ? 'Heads' : 'Tails';
    result.textContent = side === 'heads' ? 'Heads' : 'Tails';
}

