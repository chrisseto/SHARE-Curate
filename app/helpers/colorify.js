import Ember from 'ember';


function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}


export default Ember.Helper.helper(function(params) {
    //https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
    return '#' + ((hashCode(params.join('')) & 0x00FFFFFF).toString(16).toUpperCase() + '0000').slice(0, 6);
});
