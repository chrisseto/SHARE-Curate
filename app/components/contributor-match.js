import Ember from 'ember';


const ContributorMatch = Ember.Component.extend({
    store: Ember.inject.service(),

    possibleMatches: function() {
        return this.get('store').query('author', {
            q: `NOT ref:${this.get('contrib.id')} AND ("${this.get('contrib.givenName')}"~ OR "${this.get('contrib.familyName')}"~)`
        });
    }.property('contrib'),
});

ContributorMatch.reopenClass({
    positionalParams: ['contrib']
});

export default ContributorMatch;
