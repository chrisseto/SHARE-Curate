import Ember from 'ember';


export default Ember.Helper.helper(function(params) {
    let [str, length] = params;
    length = length || 50;
    if (str.length <= length)
        return str;
    return str.slice(0, length - 3) + '...';
});
