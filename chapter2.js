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



document.querySelectorAll ('.img-cont').forEach(image => {
    
    image.addEventListener('click', () => {
        document.querySelector('.popup-image').style.display = "block";
        
    })

})  

const closeImg = document.querySelector('.popup-image span');

closeImg.addEventListener("click", () => {
    document.querySelector('.popup-image').style.display = "none"
})






const image2 = document.querySelector('.img-cont2');
const close1 = document.querySelector('.pop2 span')

    image2.addEventListener("click", () => {
        document.querySelector('.pop2').style.display = "block"
})

    close1.addEventListener("click", () => {
        document.querySelector('.pop2').style.display = "none"
})


const image3 = document.querySelector('.img-cont3');
const close2 = document.querySelector('.pop3 span');

    image3.addEventListener('click', () => {

        document.querySelector('.pop3').style.display = "block"
    })

    close2.addEventListener("click", () => {
        document.querySelector('.pop3').style.display = "none"
    })


const image4 = document.querySelector('.img-cont4');
const close3 = document.querySelector('.pop4 span');

    image4.addEventListener("click", () => {
        document.querySelector('.pop4').style.display = "block";
    })

    close3.addEventListener("click", () => {
        document.querySelector('.pop4').style.display = "none"
    })


document.querySelectorAll('.img-cont5').forEach(image => {

    image.addEventListener("click", () => {

        document.querySelector('.pop5').style.display = "block";
    })

    const close4 = document.querySelector('.pop5');

    close4.addEventListener("click", () => {
        document.querySelector('.pop5').style.display = "none"
    })

})