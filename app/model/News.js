Ext.define('Test.model.News', {
    extend: 'Test.model.Base',
    alias: 'model.news',
    fields: [
        'author',
        'title',
        'description',
        'url',
        'urlToImage',
        'publishedAt'
    ]
});
