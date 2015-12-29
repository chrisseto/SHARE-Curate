import DS from 'ember-data';

export default DS.Model.extend({
    contributor: DS.attr('string'),
    sameAs: DS.attr()
});
