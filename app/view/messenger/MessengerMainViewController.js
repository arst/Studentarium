Ext.define('Test.view.messenger.MessengerMainViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.messengerMainView',

    onViewShown: function () {
        var me = this;
        var store = me.getViewModel().get('localStorage');

        if (!store.getItem('chat_nickname')) {
            Ext.Msg.prompt('Enter the nickname', 'Please, enter the nickname', function (btnId, value) {
                if (btnId == 'ok') {
                    store.setItem('chat_nickname', value);
                    me.register();
                }
            });
        } else {
            me.register();
        }
    },

    register: function () {
        var me = this;
        var connection = $.hubConnection('http://localhost:8484/signalr', { useDefaultPath: false });
        var chatHub = connection.createHubProxy('chatHub');
        chatHub.on('sendPrivateMessage', function(from,message){
            var chatTab = me.lookupReference('chatTabs').getComponent(Ext.String.format('[title={0}]',from));
            if(!chatTab){
                me.lookupReference('chatTabs').add([{
                            title: from,
                            items: [
                                 {
                                    xtype: 'textarea',
                                    reference: from + 'Messages',
                                    flex: 9,
                                    width: '100%',
                                    readOnly: true
                                }
                            ]
                        }
                ]);
            }
            var existingMessages = me.lookupReference(from + 'Messages').getValue();
            me.lookupReference(from + 'Messages').setValue(existingMessages + "\n" + Ext.String.format('{0}: {1}', from, message));
        });
        var server = $.connection.chatHub;
        connection.start().done(function () {
            alert('Connected');
        })
            .fail(function () {
                alert('Failed');
            })
    }
});
