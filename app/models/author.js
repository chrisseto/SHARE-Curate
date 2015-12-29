import DS from 'ember-data';

export default DS.Model.extend({
    affiliation: DS.attr(),
    email: DS.attr('string'),
    sameAs: DS.attr('string'),

    additionalName: DS.attr('string'),
    familyName: DS.attr('string'),
    givenName: DS.attr('string'),
    name: DS.attr('string'),
    // sourceDocument: DS.belongsTo('normalized', {async: true}),
    researchObjects: DS.hasMany('normalized', {async: true}),
    researchObjectTitles: DS.attr(),

    cName: function() {
        if (!(this.get('givenName') || this.get('familyName')))
            return this.get('name');
        return (this.getWithDefault('givenName', '') + ' ' + this.getWithDefault('familyName', '')).replace(/[\.,]/g, '');
    }.property('givenName', 'familyName')
});
