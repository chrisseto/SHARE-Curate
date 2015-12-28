import DS from 'ember-data';

export default DS.Model.extend({
    affiliation: DS.attr(),
    email: DS.attr('string'),
    sameAs: DS.attr('string'),

    additionalName: DS.attr('string'),
    familyName: DS.attr('string'),
    givenName: DS.attr('string'),
    name: DS.attr('string'),
    sourceDocument: DS.belongsTo('normalized', {async: true}),

    cName: function() {
        return (this.get('givenName') + ' ' + this.get('familyName')).replace(/[\.,]/g, '');
    }.property('givenName', 'familyName')
});
