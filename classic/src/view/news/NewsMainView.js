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
            listeners: {
                afterrender: function () {
                    var me = this;
                    var data = {
                        news: [
                            { Title: 'News 1', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '1000' },
                            { Title: 'News 2', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '900' },
                            { Title: 'News 3', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '800' },
                            { Title: 'News 4', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '500' },
                            { Title: 'News 5', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '600' },
                            { Title: 'News 6', PublishedAt: new Date(), ShortDescription: 'This is a good news...', Rating: '900' }
                        ]
                    };
                    var tpl = new Ext.XTemplate(
                        '<tpl for="news">',
                        '<p class="news-header">{Title}</p>',
                        '<p class="news-body">{ShortDescription}</p>',
                        '</tpl>'
                    );
                    debugger;
                    tpl.overwrite(me.body, data);
                }
            }
        },
        {
            title: 'Top news',
            region: 'east',
            width: 175,
            minWidth: 100,
            maxWidth: 250,
            items: [
                {
                    xtype: 'grid',
                    store: {
                        type: 'news'
                    }
                }
            ]
        }

    ]
});