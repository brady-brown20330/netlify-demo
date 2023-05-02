
export const prefixReferenceIncludes = (mbId: string, ...references: string[]) => {
  let result = references.map(e => mbId + '.' + e);
  return result;
}

export const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

export const addToDateNow = (seconds: number) => {
  var newDate = new Date();
  newDate.setTime(new Date().getTime() + (seconds * 1000));
  return newDate;
}

export const capitalizeFirstLetter = (text:string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
