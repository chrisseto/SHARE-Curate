import Em from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Em.Route.extend(UnauthenticatedRouteMixin, {
    beforeModel() {
        this._super(...arguments);
        var hash = window.location.hash.substring(1).split('&').map(function(str) {return this[str.split('=')[0]] = str.split('=')[1], this;}.bind({}))[0];
        window.location.hash = '';
        if (!hash.access_token) return;
        this.get('session').authenticate('authenticator:jam-osf-jwt', hash.access_token, hash.expires_in);
        return this.transitionTo('index');
    }
});
