import Ember from 'ember';


const ContributorRow = Ember.Component.extend({
    tagName: 'tr',
    arrow: false,
    checkbox: false,
    init() {
        this._super(...arguments);
        this.on('click', this, function() {
            this.toggleProperty('contrib.expanded');
        });
    }
});

ContributorRow.reopenClass({
    positionalParams: ['contrib']
});

export default ContributorRow;
