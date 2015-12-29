import DS from 'ember-data';

//TODO override serialize as well
export default DS.JSONAPISerializer.extend({
  serialize(snapshot, options) {
    let ret = this._super(snapshot, options);
    ret.data.type = 'documents';
    return ret;
  }
});
