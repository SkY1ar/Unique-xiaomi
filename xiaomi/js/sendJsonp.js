var sendJsonp = function(url,data){
    var $script = document.createElement('script');
    var flag = url.includes('?') ? '&' : '?';
    url += flag + '_=' + Date.now();
    for(var key in data){
        url += '&' + key + '=' + data[key];
    }
    $script.src = url;
    document.body.appendChild($script);
}