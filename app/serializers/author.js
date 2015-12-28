import DS from 'ember-data';


function JSONAPIify(payload) {
    payload.type = 'authors';
    payload.attributes = Object
        .keys(payload.attributes)
        .reduce((acc, key) => {
            acc[key.dasherize()] = payload.attributes[key];
            return acc;
        }, {});
    payload.relationships['source-document'] = {
        links: {
            self: '/v1/namespaces/SHARE/collections/normalized/documents/' + (payload.attributes['source-document']),
            related: '/v1/namespaces/SHARE/collections/normalized/documents/' + (payload.attributes['source-document']),
        }
    };
    delete payload.attributes['source-document'];
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
