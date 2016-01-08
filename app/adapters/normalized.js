import DS from 'ember-data';
import ENV from 'share-curate/config/environment';
import UrlTemplates from 'ember-data-url-templates';

export default DS.JSONAPIAdapter.extend(UrlTemplates, {
    host: ENV.jamURI,
    urlTemplate: '{+host}/v1/namespaces/SHARE/collections/share-data/documents{/id}',
    queryUrlTemplate: '{+host}/v1/namespaces/SHARE/collections/share-data/_search',
});
