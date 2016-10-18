import Ember from 'ember';
import ChildMixin from 'ember-composability-tools/mixins/child';
const { Component } = Ember;

export default Component.extend(ChildMixin, {
  didInsertParent() {
    console.log('didInsertParent - child', this.get('name'));
  },

  willDestroyParent() {
    console.log('willDestroyParent - child', this.get('name'));
  }
});
