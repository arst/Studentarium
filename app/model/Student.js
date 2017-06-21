Ext.define('Test.model.Student', {
    extend: 'Test.model.Base',
    alias: 'model.student',
    fields: [
        'firstName',
        'middleName',
        'lastName', 
        'class', 
        'avgScore', 
        {
            name: 'fullName',
            persist:false,
            convert: function(v, record){
                var data = record.getData();
                return data.firstName + " " + data.middleName + " " + data.lastName;
            }
        }
    ]
    
});
