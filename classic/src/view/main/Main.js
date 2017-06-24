Ext.define('Test.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Test.view.messenger.MessengerMainView',
        'Test.view.news.NewsMainView',
        'Test.view.main.MainController',
        'Test.view.main.MainModel',
        'Test.view.main.List',
        'Test.view.students.StudentsView'
    ],
    controller: 'main',
    viewModel: 'main',
    items: [
        {
            xtype: 'panel',
            layout: 'card',
            height: '100%',
            reference: 'mainView',
            dockedItems:[
                {
                    xtype:'toolbar',
                    items:[
                        {
                            xtype: 'button',
                            text: 'Menu',
                            reference: 'menuBtn',
                            menu:[
                                {
                                    text: 'Students',
                                    listeners:{
                                        click: 'onMenuItemClick'
                                    }
                                },
                                {
                                    text: 'News',
                                    listeners:{
                                        click: 'onMenuItemClick'
                                    }
                                },
                                {
                                    text: 'Messenger',
                                    listeners:{
                                        click: 'onMenuItemClick'
                                    }
                                },
                                {
                                    text:'Contacts',
                                    listeners:{
                                        click: 'onMenuItemClick'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            items: [
                /*{
                    title: 'Students',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'studentsList',
                            flex: 4
                        },
                        {
                            xtype: 'studentClasses',
                            flex: 2
                        }
                    ]
                }*/{
                    xtype: 'studentsView'
                }, {
                    title: 'News',
                    items: [
                        {
                            xtype: 'newsMainView'
                        }
                    ]
                },
                {
                    title: 'Messenger',
                    items: [
                        {
                            xtype: 'messengerMainView'
                        }
                    ]
                }
            ]
        }
    ]
});
