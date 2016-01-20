// IIFE to read latest data from WordPress RSS feed

/*
(function () {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xhttp.responseText, 'text/xml');
      console.log(xmlDoc);
      // return xmlDoc;
      var posts = '';
      title = xmlDoc.getElementsByTagName('title');
      link = xmlDoc.getElementsByTagName('link');
      date = xmlDoc.getElementsByTagName('pubDate');

      posts += '<h2>Latest Posts</h2><ul>'

      for (i = 1; i < title.length; i++) {
        posts += '<article class="blog-post"><li><h3 class="post-title"><a href="' + link[i].childNodes[0].nodeValue + '">' + title[i].childNodes[0].nodeValue + '</a></h3></li></article>';
      }

      posts += '</ul><hr />'

      document.getElementById('blog-section').innerHTML = posts;
      console.log(posts);
    }
  };
  xhttp.open('GET', 'http://www.jacobward.co.uk/feed/', true);
  xhttp.send();

}());
*/
