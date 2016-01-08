import DS from 'ember-data';
import ENV from 'share-curate/config/environment';
import UrlTemplates from 'ember-data-url-templates';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, UrlTemplates, {
    authorizer: 'authorizer:jam-jwt',

    host: ENV.jamURI,
    urlTemplate: '{+host}/v1/namespaces/SHARE/collections/contributor-curation/documents{/id}',
});
