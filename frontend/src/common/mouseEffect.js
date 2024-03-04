const mouseEffect = () => {
  function mousecursor() {
    const cursorInner = document.querySelector(".cursor-inner"),
      cursorOuter = document.querySelector(".cursor-outer");
    let n,
      i = 0,
      o = false;
    
    // 处理鼠标移动事件
    window.onmousemove = function (s) {
      if (!o) {
        cursorOuter.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
      }
      cursorInner.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
      n = s.clientY;
      i = s.clientX;
    };

    // 处理鼠标点击事件
    window.onclick = function () {
      cursorInner.classList.remove("cursor-hover");
      cursorOuter.classList.remove("cursor-hover");
    };

    // 处理鼠标移入和移出事件
    if (document.querySelector(".cursor-pointer")) {
      document.querySelector(".cursor-pointer").addEventListener("mouseenter", function () {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      });
      document.querySelector(".cursor-pointer").addEventListener("mouseleave", function () {
        cursorInner.classList.remove("cursor-hover");
        cursorOuter.classList.remove("cursor-hover");
      });
      cursorInner.style.visibility = "visible";
      cursorOuter.style.visibility = "visible";
    }

    document.querySelectorAll("a").forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      });
      item.addEventListener("mouseleave", function () {
        cursorInner.classList.remove("cursor-hover");
        cursorOuter.classList.remove("cursor-hover");
      });
    });
    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";
  }
  mousecursor();
};

export default mouseEffect;
