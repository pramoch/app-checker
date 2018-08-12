function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

var appUrl = getParameterByName('appUrl');
var playStoreUrl = getParameterByName('playStoreUrl');
var appStoreUrl = getParameterByName('appStoreUrl');

var options = {};

if (playStoreUrl) {
  options.android = {
    storeUrl: playStoreUrl
  }

  var id = getParameterByName('id', playStoreUrl);

  if (id) {
    options.android.appId = id;
  }
}

if (appStoreUrl) {
  options.iOS = {
    storeUrl: appStoreUrl
  }
}

deeplink.setup(options);

if (appUrl) {
  deeplink.open(appUrl);
}