import DS from 'ember-data';
import UrlTemplates from 'ember-data-url-templates';

export default DS.JSONAPIAdapter.extend(UrlTemplates, {
    host: 'http://localhost:1212',
    urlTemplate: '{+host}/v1/namespaces/SHARE/collections/authors/documents{/id}',
    queryUrlTemplate: '{+host}/v1/namespaces/SHARE/collections/authors/_search',
});