window.addEventListener('load', function() {
    console.log('window loaded')
    xhr = new XMLHttpRequest();
    var url = "https://library.copperstud.io/ingest";
    //var url = '/'
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        console.log('ready state change')
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json)
        }
    }
    var data = JSON.stringify({
        "src":"fb",
        "src_id":"1234567",
        "title": "Title for RHEO",
        "mood": "spark",
        "genre": "film,comedy",
        "people": "johntravolta",
        "misc": "airplane,wings"
    });
    xhr.send(data);
})
/*
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage')

    chrome.tabs.getSelected(null, function(tab) {
        d = document
        console.log('tab', tab)
        var title = tab.title.split(' on Vimeo')[0]
        var f = d.querySelector('.video-form')
        f.querySelector('#src').value = tab.url
        f.querySelector('#title').value = title
        src.value = tab.url

        //var f = d.createElement('form')
        //f.action = 'http://gtmetrix.com/analyze.html?bm'
        //f.method = 'post'
        //var i = d.createElement('input')
        //i.type = 'hidden'
        //i.name = 'url'
        //i.value = tab.url
        //f.appendChild(i)
        //d.body.appendChild(f)
        //f.submit()
    })
}, false)
*/
