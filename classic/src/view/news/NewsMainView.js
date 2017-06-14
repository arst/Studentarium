Ext.define('Test.view.news.NewsMainView',{
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
           collapsible: false,
           layout: 'fit',
           items: [
               {
                   xtype: 'grid',
                   store: {
                       type: 'news'
                   }
               }
           ]
       },
       {
           title: 'Top news',
           region: 'east',
           width: 175,
           minWidth: 100,
           maxWidth: 250
       }
    ]
});