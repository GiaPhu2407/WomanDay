var progress = document.querySelector(".progress");
var percent = document.querySelector(".percent");
var textBox = document.querySelector(".textBox");
var button = document.querySelector(".button");
var textBtn = document.querySelector(".textBtn");
var heartBox = document.querySelector(".heartBox");
var cursor = document.querySelector(".buttonCLick img"); 
var heartItem1 = document.querySelector(".heartItem.item1")
var heartItem2 = document.querySelector(".heartItem.item2")
var heartItem3 = document.querySelector(".heartItem.item3")
var count = 0;
var percentWidth = 0;
var heartLeft = -3.2;
var progressLoad = setInterval(progressInterva,100)
function createRose() {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    document.body.appendChild(rose);
  
    // Đặt vị trí ngang ngẫu nhiên cho bông hồng
    rose.style.left = Math.random() * 100 + "vw";
  
    // Tạo thời gian rơi ngẫu nhiên cho từng bông hồng
    rose.style.animationDuration = Math.random() * 3 + 2 + "s";
  
    // Xóa bông hồng sau khi nó rơi xuống dưới màn hình
    setTimeout(() => {
      rose.remove();
    }, 5000);
  }
  
  // Tạo bông hồng mới mỗi 700ms
  setInterval(createRose, 700);
  
button.addEventListener("click", function(){
    button.style.transform = "scale(0.8)";
    setTimeout(()=>{
        button.style.transform = "scale(1)";
        window.location.href = "./love/love.html"
    },200)
})

function progressInterva(){
    if(count == 100 && percentWidth == 100){
        clearInterval(progressLoad)
        percent.textContent = "Vào nhận quà nha :))";
        percent.style.letterSpacing = "1px";
        textBox.style.transform = "scale(1.3)"
        heartItem3.style.animation = "1s heartScale forwards"
        setTimeout(()=>{
            textBox.style.transform = "scale(0)"
        },400)
        setTimeout(()=>{
            textBox.style.opacity = "0"
        },600)
        setTimeout(()=>{
            button.style.transform= "scale(1)";
        },800);
        setTimeout(()=>{
            button.style.background = "rgb(244,118,121)"
            button.style.width = "130px";
            button.style.borderRadius = "20px"
        },1500)
        setTimeout(()=>{
            button.style.height = "40px";
        },2000)
        setTimeout(()=>{
            textBtn.textContent = "Click me!"
            textBtn.style.color = "#fff"
        },2500)
        setTimeout(()=>{
            cursor.style.opacity = "1";
        },3000)
    }
    else{
        if(count == 10){
            heartItem1.style.animation = "1s heartScale forwards"
        }
        if(count ==46){
            percent.style.color= "#fff"
        }
        if(count == 60){
            heartItem2.style.animation = "1s heartScale forwards"
        }
        count += 1;
        percentWidth += 1;
        heartLeft += 0.968;
        progress.style.width = percentWidth + '%'
        percent.innerText = count + '%'
        heartBox.style.left = heartLeft + '%'
    }
}