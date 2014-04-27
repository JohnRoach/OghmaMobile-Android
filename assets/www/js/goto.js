function goto(){
    var address = document.getElementById("address").value;

    if(confirm(address)){
        navigator.app.loadUrl(address);
    }
}