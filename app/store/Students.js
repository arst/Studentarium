Ext.define('Test.store.Students', {
    extend: 'Ext.data.Store',
    model: 'Test.model.Student',
    alias: 'store.students',
    autoload: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/students',
        reader: {
            type: 'json',
            rootProperty: 'students'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});
