import Ember from 'ember';
import ENV from 'share-curate/config/environment';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    actions: {
        authenticate() {
            window.location = `${ENV.OSF.url}/oauth2/authorize?response_type=token&scope=${ENV.OSF.scope}&client_id=${ENV.OSF.clientId}&redirect_uri=${encodeURI(window.location)}`;
    // if (!window.location.hash || window.location.hash === '') {
            // return;
        // }

        // var hash = window.location.hash.substring(1).split('&').map(function(str) {return this[str.split('=')[0]] = str.split('=')[1], this;}.bind({}))[0];
        // window.location.hash = '';


            // this.get('session').authenticate('authenticator:jam-namespace-jwt', 'SHARE', this.get('username'), this.get('password'));
        }
    }
});
