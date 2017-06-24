Ext.define('Test.view.messenger.MessengerMainView',{
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    xtype: 'messengerMainView',
    alias: 'widget.messengerMainView',
    requires: [
        'Test.view.messenger.MessengerMainViewController',
        'Test.store.MessengerContacts'
    ],
    controller: 'messengerMainView',
    items: [
        {
            xtype: 'container',
            flex: 8,
            layot: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'tabpanel',
                    items:[
                        {
                            title: 'All',
                            items: [
                                 {
                                    xtype: 'textarea',
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
                            flex: 9
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            flex: 1
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'grid',
            flex: 2,
            title: 'Online',
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