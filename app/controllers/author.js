import Ember from 'ember';

export default Ember.Controller.extend({
  matches: Ember.A([]),
  disableSubmit: function() {
    return this.get('matches.length') === 0;
  }.property('matches.[]'),
  selectedDocument: null,

  possibleMatches: function() {
    return this.store.query('author', {
      'page[size]': 10,
      q: `NOT ref:${this.get('model.id')} AND ("${this.get('model.givenName')}"~ OR "${this.get('model.familyName')}"~)`
    });
  }.property('model'),
  init() {
    this.set('matches', Ember.A([]));
  },
  actions: {
    submit() {
      this.store.createRecord('curation', {
        contributor: this.model.id,
        sameAs: this.get('matches').map(contrib => contrib.id)
      }).save();
      this.transitionToRoute('success');
    },
    documentSelected(doc) {
      this.set('selectedDocument', doc);
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
