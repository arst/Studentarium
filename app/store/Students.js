Ext.define('Test.store.Students', {
    extend: 'Ext.data.Store',

    alias: 'store.students',
    autoload: true,
    fields: [
        'firstName',
        'middleName',
        'lastName',
        'class',
        'avgScore',
        {
            name: 'fullName',
            persist: false,
            convert: function (v, record) {
                var data = record.getData();
                return data.firstName + " " + data.middleName + " " + data.lastName;
            },
            depends:['firstName','lastName','middleName']
        }
    ],
    /*
    data: { items: [
        { firstName: 'Jean', middleName: 'Franko', lastName: 'Luc', class: '33-CA-091', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { firstName: 'Mike', middleName: 'Melon', lastName: 'Quarz',class: '33-CA-091',    email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { firstName: 'Clive', middleName: 'Emanuel', lastName: 'Bork', class: '33-CA-091',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { firstName: 'Bob', middleName: 'Manny', lastName: 'Miles', class: '33-CA-091',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    
    ]},
    */

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
