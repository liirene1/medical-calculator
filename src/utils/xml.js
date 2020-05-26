import moment from 'moment';

export function calculateAge(birthday) {
  return moment().diff(moment(birthday), 'years');
}

export function parseXML(xmlText, target) {
  const xmlResponse = new DOMParser().parseFromString(xmlText, "text/xml");
  const targetNode = xmlResponse.getElementsByTagName(target)[0];
  if (targetNode) {
    return targetNode.getAttribute("value");
  }
  return;
}
