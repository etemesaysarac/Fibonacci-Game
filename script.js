const clockEl = document.getElementById('clock');
const dateEl = document.getElementById('datestamp');
function tick(){
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString('en-GB');
  dateEl.textContent = now.toLocaleDateString('en-GB', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
}
tick(); setInterval(tick, 1000);

const isPerfectSquare = (x) => {
  if (x < 0) return false;
  const r = Math.floor(Math.sqrt(x));
  return r*r === x;
};
const isFibonacci = (n) => {
  return isPerfectSquare(5*n*n + 4) || isPerfectSquare(5*n*n - 4);
};

const input = document.getElementById('n');
const btn = document.getElementById('checkBtn');
const result = document.getElementById('result');
const statusEl = document.getElementById('status');

function showResult(msg, ok){
  result.className = 'result ' + (ok ? 'success' : 'error');
  result.textContent = msg;
  statusEl.textContent = ok ? 'Valid' : 'Invalid';
}

function launchConfetti(){
  confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
}

btn.addEventListener('click', () => {
  const val = input.value.trim();
  if (val === '') { showResult('Please enter a number.', false); return; }
  const n = Number(val);
  if (!Number.isInteger(n) || n < 0) {
    showResult('Please enter a positive integer.', false);
    return;
  }
  if (n > 1000000) { // Upper limit
    showResult('Please enter a smaller number.', false);
    return;
  }
  if (n < 1) { // Lower limit
    showResult('Please enter a larger number.', false);
    return;
  }
  const ok = isFibonacci(n);
  if (ok) {
    showResult(`${n} is a Fibonacci number!`, true);
    launchConfetti();
  } else {
    showResult(`${n} is NOT a Fibonacci number.`, false);
  }
});