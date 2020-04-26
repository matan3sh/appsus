export default {
  makeId,
};

function makeId() {
  var txt = '';
  var possible = '0123456789';
  for (var i = 0; i < 12; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
