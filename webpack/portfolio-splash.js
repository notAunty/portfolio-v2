import config from "./config";
export default () => {
  setTimeout(() => {
    $("#portfolio-splash").css("display", "none");
  }, config.production ? 2000 : 200000);
}