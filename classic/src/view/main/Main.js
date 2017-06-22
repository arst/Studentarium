Ext.define('Test.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Test.view.messenger.MessengerMainView',
        'Test.view.news.NewsMainView',
        'Test.view.main.MainController',
        'Test.view.main.MainModel',
        'Test.view.main.List',
        'Test.view.main.StudentsList',
        'Test.view.main.StudentDetails'
    ],
    controller: 'main',
    viewModel: 'main',
    items: [
        {
            xtype: 'tabpanel',
            ui: 'navigation',

            tabBarHeaderPosition: 1,
            titleRotation: 0,
            tabRotation: 0,

            header: {
                layout: {
                    align: 'stretchmax'
                },
                title: {
                    bind: {
                        text: '{name}'
                    },
                    flex: 0
                },
                iconCls: 'fa-th-list'
            },
            tabBar: {
                flex: 1,
                layout: {
                    align: 'stretch',
                    overflowHandler: 'none'
                }
            },
            items: [
               {
                   title: 'Students',
                   minHeight: 650,
                   layout: {
                       type: 'vbox',
                       align: 'stretch'
                   },
                   items:[
                        {
                            xtype: 'studentsList',
                            flex: 5
                        },
                        {
                            xtype: 'studentdetails',
                            flex: 2
                        }
                   ]
               },{
                   title: 'News1',
                   items: [
                       {
                           xtype: 'newsMainView',
                           height: 1000
                       }
                   ]
               },
               {
                   title: 'Messenger',
                   items:[
                        {
                            xtype: 'messengerMainView'
                        }
                   ]
               }
            ]
        }
    ]
});
