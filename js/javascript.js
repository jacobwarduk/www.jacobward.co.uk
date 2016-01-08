function parseXml(feed) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString('http://www.feedforall.com/sample.xml', 'application/xml');
  alert(JSON.stringify(xmlDoc));
  return xmlDoc;
}
