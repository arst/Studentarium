Ext.define('Test.view.messenger.MessengerMainView',{
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    height: 600,
    xtype: 'messengerMainView',
    alias: 'widget.messengerMainView',
    requires: [
        'Test.view.messenger.MessengerMainViewController',
        'Test.store.MessengerContacts'
    ],
    controller: 'messengerMainView',
    listeners: {
        show: 'onViewShown'
    },
    items: [
        {
            xtype: 'container',
            flex: 8,
            height: '100%',
            layot: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'tabpanel',
                    reference: 'chatTabs',
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
            hideHeaders:true,
            columns: [
               {text: 'Name', dataIndex: 'Name', flex: 10} 
            ],
            store:{
                type: 'messengerContacts'
            }
        }
    ]
});