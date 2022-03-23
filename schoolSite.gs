const schoolNavLIPop = () => {
  let schoolNavLI = [];
  schoolSiteNav.forEach(element => schoolNavLI.push({"textButton": {"text": `${element.text}`,"onClick": {"openLink": {"url": `${element.href.startsWith("/") ? "https://sites.google.com" : ""}${element.href}`}}}}));
  return schoolNavLI;
} 
