chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    var qrcode = new QRCode(document.getElementById("qrcode"),{
        text: tabs[0].url
    })
})