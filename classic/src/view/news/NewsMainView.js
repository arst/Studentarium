Ext.define('Test.view.news.NewsMainView', {
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'fit'
    },
    xtype: 'newsMainView',
    alias: 'widget.newsMainView',
    requires: [
        'Test.view.news.NewsMainViewController'
    ],

    controller: 'newsMainView',
    heder: false,
    scrollable: true,
    collapsible: false,
    reference: 'todaysNews',
    tpl: new Ext.XTemplate(
        '<div style="margin: 10px;text-align:center;">',
        '<tpl for=".">',
        '<img class="news-image" src="{urlToImage}"/>',
        '<p data-id="{title}" data-url="{url}" class="news-header">{title}</p>',
        '<p class="news-body">{description}</p>',
        '</tpl>',
        '</div>'
    )
});