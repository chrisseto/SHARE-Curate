import Ember from 'ember';

export default Ember.Controller.extend({
    authorName: function() {
        return `${this.get('model.givenName')} ${this.get('model.familyName')}`;
    }.property('model'),
    possibleMatches: function() {
        return this.store.query('author', {
            q: `NOT ref:${this.get('model.id')} AND ("${this.get('model.givenName')}"~ OR "${this.get('model.familyName')}"~)`
        });
    }.property('model'),
});
