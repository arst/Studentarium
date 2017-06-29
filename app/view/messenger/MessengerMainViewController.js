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

    onSendClick : function(){
        var me = this;
        var currentActiveTab = me.lookupReference('chatTabs').getActiveTab();
        var to = currentActiveTab.getTitle();
        if (to == 'All') {
            me.chatHub.invoke('sendPublicMessage', me.lookupReference('messageField').getValue());
        }else{
            me.chatHub.invoke('sendPrivateMessage', to, me.lookupReference('messageField').getValue());
        }
    },

    register: function () {
        var me = this;
        me.getView().setLoading(true);
        var connection = $.hubConnection('http://localhost:8484/signalr', { useDefaultPath: false });
        var chatHub = connection.createHubProxy('chatHub');
        me.chatHub = chatHub;
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
        chatHub.on('sendMessage',function(from, message){
            var originalValue = me.lookupReference('allMessages').getValue();
            me.lookupReference('allMessages').setValue(originalValue + Ext.String.format('{0}: {1}', from, message));
        });
        var server = $.connection.chatHub;
        connection.start().done(function () {
            me.chatHub.invoke('register', me.getViewModel().get('localStorage').getItem('chat_nickname'))
            .always(function(){
                me.getView().setLoading(false);
            });
        })
            .fail(function () {
                alert('Failed');
            })
    }
});
