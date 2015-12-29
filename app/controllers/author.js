import Ember from 'ember';

export default Ember.Controller.extend({
  matches: Ember.A([]),
  selectedDocument: null,

  possibleMatches: function() {
    return this.store.query('author', {
      q: `NOT ref:${this.get('model.id')} AND ("${this.get('model.givenName')}"~ OR "${this.get('model.familyName')}"~)`
    });
  }.property('model'),

  actions: {
    submit() {
      this.store.createRecord('curation', {
        contributor: this.model.id,
        sameAs: this.get('matches').map(contrib => contrib.id)
      }).save();
    },
    documentSelected(doc) {
      this.set('selectedDocument', doc);
      console.log(arguments);
    },
      clear() {
        this.set('selectedDocument', null);
      },
      selected(checkbox) {
        if (checkbox.get('value')) {
          this.get('matches').pushObject(checkbox.get('contrib'));
        } else {
          this.get('matches').removeObject(checkbox.get('contrib'));
        }
      }
  }
});
