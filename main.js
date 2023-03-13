

const list = document.querySelectorAll('.list');

    for(let i = 0; i < list.length; i++){
        list[i].onclick = () => {
            let k = 0; 
            while(k < list.length){
                list[k++].className = "list"
            }

            list [i].className = "list active"
        }

    }


const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.sidebar');


toggle.addEventListener("click", () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')

})




const arrow = document.querySelector('.toggleArrow');
const boxContent = document.querySelector('.box-content');

arrow.addEventListener("click", () => {
    arrow.classList.toggle('active')
    boxContent.classList.toggle('active')
})




const boxContent1 = document.querySelector('.box-content-1');
const arrow2 = document.querySelector('.toggleArrow2');
    
arrow2.addEventListener("click", () => {
    arrow2.classList.toggle('active')
    boxContent1.classList.toggle('active')
})


const arrow3 = document.querySelector('.toggleArrow3');
const boxContent2 = document.querySelector('.box-content-2');

arrow3.addEventListener("click", () => {

    arrow3.classList.toggle('active');
    boxContent2.classList.toggle('active')
})


const arrow4 = document.querySelector('.toggleArrow4');
const boxContent3 = document.querySelector('.box-content-3');

arrow4.addEventListener("click", () => {
    
    arrow4.classList.toggle("active");
    boxContent3.classList.toggle("active");
})


const arrow5 = document.querySelector('.toggleArrow5');
const boxContent4 = document.querySelector('.box-content-4');

arrow5.addEventListener("click", () => {

    arrow5.classList.toggle('active');
    boxContent4.classList.toggle('active')
})

















