Ext.define('Test.view.news.NewsMainView', {
    extend: 'Ext.panel.Panel',
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
    styleHtmlContent: true,
    data: [],
    tplWriteMode: 'append',
    tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<img class="news-image" src="{urlToImage}"/>',
        '<p data-id="{title}" data-url="{url}" class="news-header">{title}</p>',
        '<p class="news-body">{description}</p>',
        '</tpl>'
    )
});