import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('login');
    this.route('author', {path: '/a/:author_id'});
    this.route('success', {path: '/sucess/'});
});

export default Router;
