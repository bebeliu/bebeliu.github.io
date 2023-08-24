//设置图片切换
let myImage = document.querySelector("img");//把 <img> 元素的引用存放在 myImage 变量里
myImage.onclick = function () {//将这个变量的 onclick 事件与一个匿名函数绑定
    let mySrc = myImage.getAttribute("src");//获取这张图片的 src 属性值
    if (mySrc === "images/firefox.jpg") {//判断 src 的值是否等于原始图像的路径
        myImage.setAttribute("src", "images/firefox2.jpg");
    } else {
        myImage.setAttribute("src", "images/firefox.jpg");
    }
};
//设置个性化欢迎信息
let myButton = document.querySelector("button");//获取新按钮和标题的引用，并保存至变量中
let myHeading = document.querySelector("h1");
//个性化欢迎信息设置函数
function setUserName() {
    let myName = prompt("请输入你的名字。");//调用 prompt() 函数,用户输入的数据储存在myName中
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        //调用 localStorage，将数据存储在浏览器中供后续获取。这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它
        myHeading.textContent = "Mozilla 酷毙了，" + myName;//最后将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字
    }
}
//初始化代码：在页面初次读取时进行构造工作
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}
//为按钮设置 onclick 事件处理器。按钮按下时运行 setUserName() 函数
myButton.onclick = function () {
    setUserName();
};
