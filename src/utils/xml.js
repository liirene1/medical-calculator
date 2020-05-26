export function calculateAge(birthday) {
  var ageDiff = Date.now() - birthday;
  var ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function parseXML(xmlText, target) {
  const xmlResponse = new DOMParser().parseFromString(xmlText, "text/xml");
  const targetNode = xmlResponse.getElementsByTagName(target)[0];
  if (targetNode) {
    return targetNode.getAttribute("value");
  }
  return;
}
