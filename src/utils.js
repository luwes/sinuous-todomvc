// MIT © Luke Edwards
export function cx(obj) {
  var k, cls='';
  for (k in obj) {
    if (obj[k]) {
      cls && (cls += ' ');
      cls += k;
    }
  }
  return cls;
}
