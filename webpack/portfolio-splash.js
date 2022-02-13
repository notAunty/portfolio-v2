import config from "./config";
export default () => {
  $("#site").css("display", "none");
  setTimeout(() => {
    $("#portfolio-splash").css("display", "none");
    $("#site").removeAttr("style");
  }, config.production ? 2000 : 100);
}