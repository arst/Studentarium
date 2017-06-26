
Ext.define('Test.view.news.NewsMainViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.newsMainView',

    afterRender: function afterRender(){
        var me = this;
        me.getView().setLoading(true);
        Ext.Ajax.request({
            url: 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=be73e9ac5306402ca2771c88db4c4ecc',
            method: 'GET',
            success: function(response, opts){
                    me.getView().setLoading(false);
                    me.getView().update(JSON.parse(response.responseText).articles);
                    me.getView().getEl().on('click', function(event){
                        if(event.target.className == "news-header"){
                            event.stopPropagation();
                            Ext.Msg.confirm('Warning', 'Are you sure you want to be redirected to the new site?',function(buttonId, value, opt){
                                if(buttonId == 'yes'){
                                    window.location = event.target.getAttribute("data-url");
                                }
                            });
                        }
                    });
            },
            failure: function(response, opts){
                Ext.Msg.alert('Error', Ext.String.format('Error getting news.\nCaused by: {0}', response), Ext.emptyFn);
                me.lookupReference('todaysNews').setLoading(false);
            }
        });
    }
});
