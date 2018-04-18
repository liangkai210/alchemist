const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

const locationReplace = () => {
  window.location.replace(window.location.origin);
};

export { getParameterByName, locationReplace };
