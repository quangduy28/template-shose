window.addEventListener("load", function () {
  const headerNavItem = document.querySelectorAll(".header-nav-item");
  headerNavItem.addEventListener("onclick", function () {
    for (let int = 0; int < headerNavItem.length; int++) {
      console.log("hello");
    }
  });
});
