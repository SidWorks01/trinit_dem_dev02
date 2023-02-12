let overallfp = window.localStorage.getItem("overallfootprint");
let sessionfp = window.localStorage.getItem("sessionfootprint");

document.getElementById("totalstats").innerText = Number(overallfp)+Number(sessionfp)+"gm";
document.getElementById("sessionstats").innerText = Number(sessionfp)+"gm";
