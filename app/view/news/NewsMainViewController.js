
Ext.define('Test.view.news.NewsMainViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.newsMainView',

    afterRender: function afterRender(){
        var me = this;
    debugger;
        me.lookupReference('todaysNews').setLoading(true);
        Ext.Ajax.request({
            url: 'http://localhost:3000/news',
            method: 'GET',
            success: function(response, opts){
                var tpl = new Ext.XTemplate(
                        '<tpl for=".">',
                        '<p class="news-header">{Title}</p>',
                        '<p class="news-body">{ShortDescription}</p>',
                        '</tpl>'
                    );
                    tpl.overwrite(me.lookupReference('todaysNews').body, JSON.parse(response.responseText));
                    me.lookupReference('todaysNews').setLoading(false);
            },
            failure: function(response, opts){
                Ext.Msg.alert('Error', Ext.String.format('Error getting news.\nCaused by: {0}', response), Ext.emptyFn);
                me.lookupReference('todaysNews').setLoading(false);
            }
        });
    }
});
