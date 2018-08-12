deeplink.setup({
    iOS: {
        appId:"568388474",
        appName:"scb-easy",
        storeUrl: "https://itunes.apple.com/th/app/scb-easy/id568388474?mt=8"
    },
    android: {
        appId: "com.scb.phone",
        storeUrl: "https://play.google.com/store/apps/details?id=com.scb.phone&hl=th" 
    }
});

function openDeepLink(tileId) {
   deeplink.open("scbeasy://lifestylelanding/tiles/"+tileId);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

openDeepLink(getParameterByName("tileId"));