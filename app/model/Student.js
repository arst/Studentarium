Ext.define('Test.model.Student', {
    extend: 'Test.model.Base',
    alias: 'model.student',
    requires: [
        'Test.model.StudentClass'
    ],
    idProperty: 'id',

    clientIdProperty: 'clientId',

    identifier: 'negative',
    fields: [
        'firstName',
        'middleName',
        'lastName',
        'class',
        'dateOfBirth',
        {
            name: 'averageScore',
            type: 'number'
        },
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
        },
        'photo'
    ],
    hasMany: {
        model: 'StudentClass',
        name: 'classes',
        associationKey: 'classes',
        store:{
            groupField: 'Semester'
        }
    },
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/students',
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }

});
