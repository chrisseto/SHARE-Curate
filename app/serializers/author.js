import DS from 'ember-data';


function JSONAPIify(payload) {
    payload.type = 'authors';
    payload.attributes = Object
        .keys(payload.attributes)
        .reduce((acc, key) => {
            acc[key.dasherize()] = payload.attributes[key];
            return acc;
        }, {});
    payload.relationships['research-objects'] = {
        data: payload.attributes['research-objects'].map(doc => ({
            id: doc.id,
            title: doc.title,
            type: 'normalized',
        }))
    };
    payload.attributes['research-object-titles'] = payload.attributes['research-objects'].map(doc => doc.title);
    delete payload.attributes['research-objects'];
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
