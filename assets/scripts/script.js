async function fetchAdvice() {
  const response = await fetch(`https://api.adviceslip.com/advice?`);

  if (response.status === 200) {
    const data = await response.json();
      
    document.querySelector('#advice').textContent = data.slip.advice
    document.querySelector('#id').textContent = data.slip.id
  }
}

fetchAdvice();

document.querySelector('.new-quote').addEventListener('click', fetchAdvice)