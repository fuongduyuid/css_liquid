const loadingCustomilyTimeOut = setInterval(() => {
  const customilyElement = document.querySelector("#customily-options");
  if (customilyElement) {
    // handling logic
    console.log("hello there");
    document.querySelector("#loading_element").style = "display: none;";
    clearInterval(loadingCustomilyTimeOut);
  }
}, 100);