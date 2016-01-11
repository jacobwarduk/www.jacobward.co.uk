// IIFE to read latest data from WordPress RSS feed
(function () {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString('http://www.jacobward.co.uk/feed', 'application/xml');
  console.log(xmlDoc);
  return xmlDoc;
}());
