function loadScript(scriptURL, stylesheetURL) {
  const script = document.createElement("script");
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = stylesheetURL;
  script.src = scriptURL;
  script.type = "text/javascript";
  script.onload = function () {
    console.log("Script loaded successfully.");
  };
  script.onerror = function () {
    console.error("Error loading script.");
  };
  document.body.appendChild(script);
  document.head.appendChild(style);
}

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  console.log("mobile");
  loadScript("./swipable-cards-script.js", "./style.css");
} else {
  console.log("not mobile");
  loadScript("./caraousel-script.js", "./caraousel-style.css");
}
