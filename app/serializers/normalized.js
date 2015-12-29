import DS from 'ember-data';


function JSONAPIify(payload) {
    payload.type = 'normalizeds';
    payload.attributes = payload.attributes.normalized;
    payload.attributes = Object
        .keys(payload.attributes)
        .reduce((acc, key) => {
            acc[key.dasherize()] = payload.attributes[key];
            return acc;
        }, {});
    return payload;
}

//TODO override serialize as well
export default DS.JSONAPISerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.data = Array.isArray(payload.data) ?
            payload.data.map(JSONAPIify) :
            JSONAPIify(payload.data);

        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
