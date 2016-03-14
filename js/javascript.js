window.onload = function () {
    window.Modal = function ($internals) {

        var $close_btn, $modal, proto;

        if (typeof $internals === 'string') {

            proto = Modal.prototype;
            $modal = document.createElement('div');

            $modal.className = 'window-wrapper';
            $modal.innerHTML = '<section class="window">' + $internals + '<a href="#" class="close_btn">Close</a></section>';

            $close_btn = $modal.getElementsByClassName('close_btn')[0];
            $close_btn.addEventListener('click', function () {
                document.body.removeChild($modal);
                return proto.IsActive = false;
            });

            if (!proto.IsActive) {
                document.body.appendChild($modal);
                proto.IsActive = true;
                return false;
            }
        }
    };

    window.Modal.prototype.IsActive = false;
    document.body.getElementsByClassName('pinterest-link')[0].addEventListener('click', function () {
        return Modal('<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class="embed-container"><iframe src="http://www.youtube.com/embed/qF7MsBtZx08?autoplay=true" frameborder="0" allowfullscreen></iframe></div>', true);
    });
};



// Read latest data from WordPress RSS feed
// showPosts = function () {
//
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//       var parser = new DOMParser();
//       var xmlDoc = parser.parseFromString(xhttp.responseText, 'text/xml');
//       console.log(xmlDoc);
//       // return xmlDoc;
//       var posts = '';
//       title = xmlDoc.getElementsByTagName('title');
//       link = xmlDoc.getElementsByTagName('link');
//
//       posts += '<h2>Latest Posts</h2>'
//
//       for (i = 1; i < title.length; i++) {
//         posts += '<article class="blog-post"><h3 class="post-title"><a href="' + link[i].childNodes[0].nodeValue + '">' + title[i].childNodes[0].nodeValue + '</a></h3></article>';
//       }
//
//       posts += '<hr />';
//
//       document.getElementById('blog-section').innerHTML = posts;
//       window.location.hash = '#blog-section';
//
//       console.log(posts);
//     }
//   };
//   xhttp.open('GET', 'http://www.jacobward.co.uk/feed/', true);
//   xhttp.send();
//
//   return false;
//
// };
