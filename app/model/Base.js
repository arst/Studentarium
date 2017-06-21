Ext.define('Test.model.Base', {
    extend: 'Ext.data.Model',
    alias: 'model.base',
    schema: {
        namespace: 'Test.model',
        proxy: {
            type: 'rest',
            url: "/{entityName}",
            writer:{
                type: 'json',
                writeAllFields: true
            }

        }
    }
});
