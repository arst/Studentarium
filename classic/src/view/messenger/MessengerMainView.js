Ext.define('Test.view.messenger.MessengerMainView',{
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    height: 700,
    xtype: 'messengerMainView',
    alias: 'widget.messengerMainView',
    requires: [
        'Test.view.messenger.MessengerMainViewController',
        'Test.store.MessengerContacts'
    ],
    controller: 'messengerMainView',
    viewModel:{
        data : {
            activeChatId: 'All'
        }
    },
    listeners: {
        show: 'onViewShown'
    },
    items: [
        {
            xtype: 'container',
            flex: 8,
            height: 700,
            layot: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'tabpanel',
                    reference: 'chatTabs',
                    listeners:{
                        tabchange: 'onAtiveChatTabChange'
                    },
                    items:[
                        {
                            title: 'All',
                            items: [
                                 {
                                    xtype: 'textarea',
                                    reference: 'allMessages',
                                    flex: 9,
                                    width: '100%',
                                    readOnly: true
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items:[
                        {
                            xtype: 'textfield',
                            reference:'messageField',
                            flex: 9
                        },
                        {
                            xtype: 'button',
                            reference: 'sendButton',
                            text: 'Send',
                            flex: 1,
                            listeners: {
                                click: 'onSendClick'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'grid',
            flex: 2,
            title: 'Online',
            height: '100%',
            reference: 'usersInChat',
            hideHeaders:true,
            columns: [
               {text: 'Name', dataIndex: 'Name', flex: 10} 
            ],
            store:{
                type: 'messengerContacts'
            },
            listeners:{
                beforeitemdblclick : 'onUsersInChatDblClick'
            }
        }
    ]
});