count = 1
console.log(count)
count.innerText = 100;

setInterval(() => {
    if(count <= 1000) {
    document.getElementById('count').innerText = count;
    count++
    }
},1)

// setTimeout(() => {
//     document.getElementById('followers').style.backgroundColor = 'blue';
// },30000)

// document.getElementById('followers').addEventListener('mouseover',(event) => {
//     event.target.style.backgroundColor ='pink'
// })
// document.getElementById('followers').addEventListener('mouseleave',(event) => {
//     event.target.style.backgroundColor ='yellow'
// })
// document.getElementById('count').addEventListener('click',(event) => {
//     event.target.style.color ='white'
//     event.target.style.backgroundColor = 'Black'
// })

let body = document.querySelector("body");
console.log(body)
body.addEventListener('click',(event) => {
    let element = document.createElement('div');
    console.log(element)
    element.classList.add('circle');
    element.style.left = event.clientX + 'px';
    element.style.top =event.clientY + 'px';
    body.appendChild(element);

})