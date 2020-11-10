var TOKEN = "testtest";

document.addEventListener('DOMContentLoaded', function() {
  //create all objects
  var back_overlay = document.getElementsByClassName("back_overlay")[0];
  var service_overlay = document.getElementsByClassName("service_overlay")[0];
  var icon = document.getElementsByClassName("icon_container")[0];
  var install = document.getElementsByClassName("service_overlay_install_button")[0];
  back_overlay.onclick = function(service_overlay, back_overlay) {
    return function() {
      toggle(service_overlay);
      toggle(back_overlay);
    };
  }(service_overlay,back_overlay);
  icon.onclick = function(service_overlay, back_overlay) {
    return function() {
      toggle(service_overlay);
      toggle(back_overlay);
    };
  }(service_overlay,back_overlay);
  install.onclick = function(installButton) {
    return function() {
      var json;
      var request = new XMLHttpRequest();
      request.open("POST", "/system/api/install/?service_name=whoami&service_image=traefik/whoami&service_super=True", false);
      request.send(null);
      json = JSON.parse(request.responseText);
    };
  }(install);


}, false);

function toggle(object){
  if (object.style.display == "none") {
    object.style.display = "block";
  } else {
    object.style.display = "none";
  }
}
