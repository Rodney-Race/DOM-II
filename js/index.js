// Your code goes here
// 1.  (mouseover)
const allMenuItems = document.querySelectorAll('.nav-link, h2')
allMenuItems.forEach((a) => {
  a.addEventListener("mouseenter", (event) => {
    a.style.fontWeight = "bold"
  });
  a.addEventListener("mouseleave", (event) => {
    a.style.fontWeight = "normal"
  });
  a.addEventListener('click', event => {
    event.preventDefault()
  });
});

// 2. (keydown)
document.addEventListener('keydown', event => {
  let keyHit = event.key;
  let keyCody = event.keyCode;
  alert(`You hit the ${keyHit} key`);
});

// 3. (wheel)
const funBusImg = document.querySelector('.intro img')
const header = document.querySelector('.main-navigation')
header.style.zIndex = "1000"
funBusImg.addEventListener("wheel", z => {
  console.log("scroll", z.deltaY)
  if(z.deltaY > 0){
    //scroll up
    funBusImg.style.transform = "scale(.5)"
  }else{
    //scroll down
    funBusImg.style.transform = "scale(1)"
  }
});

// 4. (drag / drop)
const images = document.querySelectorAll("img")
images.forEach((x) => {
  x.addEventListener("drag", (event) => {
    event.preventDefault()
     console.log("denied")
    // this prevents the drag of an image
  });
});

// 5. (load)
window.addEventListener("load", (event) =>{
  if(event.returnValue === true){
    console.log("Page loaded successfully")
  }else{
    console.log("Something went wrong")
  }
});

// 6. (focus)
const inputBox = document.querySelector('input')
  inputBox.addEventListener('focus', event => {
    console.log("focus")
  }, true)

// .7 (resize)
  window.addEventListener('resize', event => {
  let newHeight = window.innerHeight;
  let newWidth = window.innerWidth;

  location.reload();

  alert('Mobile view is at 500px and tablet is at 800px. Why you shrinking my browser man?');
  alert(`My new height is ${newHeight} and new width is ${newWidth}`);
});

// .8 (scroll)
window.addEventListener("scroll", event => {
  console.log(`scroll event happened at ${event.timeStamp}`)
});

// .9 (select)
inputBox.addEventListener('select', event => {
  console.log("don't select the copyright!")
});

// .10 (dblclick)
const stopLink = document.querySelector('h2 p');
stopLink.addEventListener('dblclick', (event) => {
  card.style.backgroundColor = 'red';
  console.log('menu item click');
});
