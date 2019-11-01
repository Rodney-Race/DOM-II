// Your code goes here
// 1. function to handle menu hover effect (mouseover)
const menuHover = (element) => {
    element.addEventListener('mouseover', (e) => {
        e.target.style.color = 'black';
        e.target.style.backgroundColor = 'red';
        e.target.style.padding = '.3rem .5rem';
    });
    // removes hover effects 
    element.addEventListener('mouseleave', (e) => {
      e.target.style.color = '';
      e.target.style.backgroundColor = '';
      e.target.style.padding = '';
    });
  }
  // h2 style on mouse enter 
const headingStyle = (element) => {
    element.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(2.0)';
        e.target.style.color = 'blue';
    })
    element.addEventListener('mouseleave', (e) => {
        e.target.style.transform = '';
        e.target.style.color = '';
    });
  }
  // turn Navigation items to have a different background on mouseover
  const menuItem = document.querySelectorAll('.nav-link');
  menuItem.forEach(menuHover);
  //  style the h2 elements on hover 
  const h1El = document.querySelectorAll('h1');
  h1El.forEach(headingStyle);
  const h2El = document.querySelectorAll('h2');
  h2El.forEach(headingStyle);
  const h4El = document.querySelectorAll('h4');
  h4El.forEach(headingStyle);

  // 2. notify the visitor on first load (load event)
document.querySelector('.intro img').addEventListener('load', (e) => {
    const divEl = document.createElement('div');
    divEl.appendChild(document.createTextNode("Hello!"));
    const parentEl = document.querySelector('.intro')
    const h2El = document.querySelector('.intro h2');
    parentEl.insertBefore(divEl, h2El);
  
    document.querySelector('.main-navigation').style.position = 'relative';
    document.querySelector('.intro').style.position = 'relative';
    document.querySelector('.intro').style.padding= '0 0 10px';
  
    divEl.style.position = 'absolute';
    divEl.style.top = '40%';
    divEl.style.left = '20%';
    divEl.style.color = 'red';
    divEl.style.fontSize = '2rem';
    divEl.style.margin = '0 auto';
  });
  
  // 3. (doubleclick event) for the button 
  let button = document.querySelector('.btn');
  button.addEventListener('dblclick', (event) => {
    alert('Thank you for the double click!')
    });
  
  // 4. (Wheel event)
function zoom(event) {
  event.preventDefault();
    if (event.deltaY < 1) {
    // Zoom in
      scale *= event.deltaY * -1;
    }
    else {
    // Zoom out
      scale /= event.deltaY * 5;
    }
// Restrict scale
scale = Math.min(Math.max(.5, scale), 1);
// Apply scale transform
el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('img');
document.onwheel = zoom;
    
// 5. Resize event
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');
function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}
window.onresize = reportWindowSize;

 //6. 