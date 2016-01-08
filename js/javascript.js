function parseXml(feed) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(feed, 'application/xml');
  // alert(JSON.stringify(xmlDoc));
  return xmlDoc;
}
