Ext.define('Test.model.Student', {
    extend: 'Test.model.Base',
    alias: 'model.student',
    idProperty: 'id',

    clientIdProperty: 'clientId',

    identifier: 'negative',
    fields: [
        'firstName',
        'middleName',
        'lastName',
        'class',
        'dateOfBirth',
        'avgScore',
        'email',
        'phone',
        {
            name: 'fullName',
            persist: false,
            convert: function (v, record) {
                var data = record.getData();
                return data.firstName + " " + data.middleName + " " + data.lastName;
            },
            depends: ['firstName', 'lastName', 'middleName']
        }
    ],
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/students',
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }

});
