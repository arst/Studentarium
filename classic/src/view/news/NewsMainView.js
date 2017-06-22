Ext.define('Test.view.news.NewsMainView', {
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'border'
    },
    xtype: 'newsMainView',
    alias: 'widget.newsMainView',
    requires: [
        'Test.view.news.NewsMainViewController'
    ],

    controller: 'newsMainView',
    items: [
        {
            title: 'Todays news',
            region: 'center',
            xtype: 'panel',
            collapsible: false,
            layout: 'fit',
            html: '',
            reference: 'todaysNews'
        }
    ]
});