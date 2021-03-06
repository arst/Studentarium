Ext.define('Test.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    navigationMap: {
        "Students" : 0,
        "News" : 1,
        "Messenger" : 2,
        "Contacts" : 3
    },

    afterRender: function(){
        var me = this;
        me.lookupReference('menuBtn').setText('Students');
    },
    
    onMenuItemClick: function(menuItem){
        var me = this;
        me.lookupReference('mainView').setActiveItem(me.navigationMap[menuItem.text]);
        me.lookupReference('menuBtn').setText(menuItem.text);
    }
});
