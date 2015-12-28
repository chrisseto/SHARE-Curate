import Ember from 'ember';

let Promise = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

export default Ember.Controller.extend({
    query: '',
    authors: null,
    init() {
        this._super.apply(this, arguments);
        this.set('authors', Promise.create({
            promise: this.store.findAll('author')
        }));
    },
    updateQuery: function() {
        this.set('authors', Promise.create());
    }.observes('query'),
    resolveQuery: _.debounce(function() {
        if (this.get('query').length === 0)
            return this.set('authors.promise', this.store.findAll('author'));
        this.set('authors.promise', this.store.query('author', {q: `*${this.get('query')}*`}));
    }, 500).observes('query')
});
