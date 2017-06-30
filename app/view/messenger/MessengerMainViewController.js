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

    onUsersInChatDblClick: function (row, record) {
        var me = this;
        var existingTab = me.getTabByTitle(record.get('Name'));
        if (record.get('Name') == me.getNickName()) {
            return;
        } else if (existingTab) {
            me.lookupReference('chatTabs').setActiveTab(existingTab);
        } else {
            me.appendNewChatTab(record.get('Name'));
        }

        me.lookupReference('chatTabs').setActiveTab(me.getTabByTitle(record.get('Name')));
    },

    onAtiveChatTabChange: function (tabPanel, tab) {
        var me = this;
        me.getViewModel().set('activeChatId', tab.getTitle());
    },

    onSendClick: function () {
        var me = this;
        var currentActiveTab = me.lookupReference('chatTabs').getActiveTab();
        var to = me.getViewModel().get('activeChatId');
        if (to == 'All') {
            me.chatHub.invoke('sendPublicMessage', me.lookupReference('messageField').getValue());
        } else {
            me.chatHub.invoke('sendPrivateMessage', to, me.lookupReference('messageField').getValue())
                .then(function () {
                    var chatTab = me.getTabByTitle(to);
                    me.appendChatTabText(chatTab, me.getViewModel().get('localStorage').getItem('chat_nickname'), me.lookupReference('messageField').getValue());
                });
        }
        me.lookupReference('messageField').setValue();
    },




    getTabByTitle: function (title) {
        var me = this;
        return me.lookupReference('chatTabs').down(Ext.String.format('[title={0}]', title));
    },

    appendChatTabText: function (chatTab, from, textToAppend) {
        var me = this;
        var textArea = me.lookupReference(chatTab.getText() + 'Messages');
        var existingMessages = textArea.getValue();
        var newMessage = Ext.String.format('{0}: {1}', from, textToAppend)
        textArea.setValue(Ext.String.format("{0}\n{1}", existingMessages, newMessage));
    },

    appendNewChatTab: function (title) {
        var me = this;
        me.lookupReference('chatTabs').add({
            title: title,
            closable: true,
            items: [
                {
                    xtype: 'textarea',
                    reference: title + 'Messages',
                    flex: 9,
                    width: '100%',
                    readOnly: true
                }
            ]
        });
    },

    getNickName: function () {
        var me = this;
        return me.getViewModel().get('localStorage').getItem('chat_nickname');
    },

    register: function () {
        var me = this;
        me.getView().setLoading(true);
        var connection = $.hubConnection('http://localhost:8484/signalr', { useDefaultPath: false });
        var chatHub = connection.createHubProxy('chatHub');
        me.chatHub = chatHub;
        chatHub.on('userConnected', function (nickName) {
            var store = me.lookupReference('usersInChat').getStore();
            store.add({ Name: nickName });
        });
        chatHub.on('userDisconnected', function (nickName) {
            var store = me.lookupReference('usersInChat').getStore();
            var userIndex = store.findBy(function (record, id) {
                return record.get('Name') == nickName;
            });
            if (userIndex > -1) {
                store.removeAt(userIndex);
            }
        });
        chatHub.on('sendPrivateMessage', function (from, message) {
            var chatTab = me.getTabByTitle(from);
            if (!chatTab) {
                me.appendNewChatTab(from);
            }
            me.appendChatTabText(me.getTabByTitle(from), from, message);
        });
        chatHub.on('sendMessage', function (from, message) {
            var originalValue = me.lookupReference('allMessages').getValue();
            me.lookupReference('allMessages').setValue(originalValue + "\n" + Ext.String.format('{0}: {1}', from, message));
        });
        var server = $.connection.chatHub;
        connection.start().done(function () {
            me.chatHub.invoke('register', me.getViewModel().get('localStorage').getItem('chat_nickname'))
                .always(function () {
                    me.getView().setLoading(false);
                });
            me.chatHub.invoke('getUsersOnline')
                .done(function (userNames) {
                    var users = [];
                    if (Ext.isArray(userNames)) {
                        for (var i = 0; i < userNames.length; i++) {
                            users.push({ Name: userNames[i] });
                        }
                        me.lookupReference('usersInChat').getStore().loadData(users);
                    };
                });
        });
    }
});
