import Ember from 'ember';


function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}


export default Ember.Helper.helper(function(params) {
    return params[0].slice(0, 50) + (params[0].length > 50 ? '...' : '');
});
