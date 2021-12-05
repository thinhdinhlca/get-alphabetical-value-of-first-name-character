
window.function = function (name) {

  name = name.value ?? "";
  s = name.charAt(0);
  return s.toLowerCase().charCodeAt(0) - 97 + 1;
}
