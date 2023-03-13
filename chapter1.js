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


const scrollToTop = document.querySelector('.autoarrow');

scrollToTop.addEventListener("click", () => {


    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    
})




