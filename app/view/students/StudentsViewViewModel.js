Ext.define('Test.view.main.StudentsViewViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.studentsViewViewModel',

    formulas: {
        currentStudentData: {
            bind: '{studentsList.selection}',
            get: function (student) {
                var result = "";
                if (student) {
                    var template = new Ext.XTemplate(
                        '<tpl for=".">',
                        '<div style="width:200px;height:200px"><img src="{photo}"/></div>',
                        '<p style="font-weight:900">First Name:</p> {firstName}',
                        '<p style="font-weight:900">Middle Name:</p> {middleName}',
                        '<p style="font-weight:900">Last Name:</p> {lastName}',
                        '</tpl>'
                    );
                    result = template.apply(student.getData(false));

                }

                return result;
            }
        }
    }
});