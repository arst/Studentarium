Ext.define('Test.store.News', {
    extend: 'Ext.data.Store',

    alias: 'store.news',

    fields: [
        'Title',
        'PublishedAt',
        'ShortDescription',
        'Rating'
    ],

    data: { 
        items: [
            { Title: 'News 1', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '1000'},
            { Title: 'News 2', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '900'},
            { Title: 'News 3', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '800'},
            { Title: 'News 4', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '500'},
            { Title: 'News 5', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '600'},
            { Title: 'News 6', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '900'},
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
