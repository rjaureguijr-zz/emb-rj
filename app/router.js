import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', {path: 'about-us'});
  this.route('contact', {path: 'contact-us'});
});

export default Router;
