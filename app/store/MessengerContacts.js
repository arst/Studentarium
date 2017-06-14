Ext.define('Test.store.MessengerContacts', {
    extend: 'Ext.data.Store',

    alias: 'store.messengerContacts',

    fields: [
        'Name'
    ],

    data: { 
        items: [
            { Name: 'Joe3387'},
            { Name: 'BobMiklan'}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
