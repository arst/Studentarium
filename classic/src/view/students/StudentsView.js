/**
 * This view is an example list of people.
 */
Ext.define('Test.view.students.StudentsView', {
    extend: 'Ext.panel.Panel',
    xtype: 'studentsView',
    width: '100%',
    height: '100%',
    viewModel: 'studentsViewViewModel',
    requires: [
        'Test.view.students.StudentsListView',
        'Test.view.students.StudentClassesView',
        'Test.view.students.StudentDetailsView'
    ],
    reference: 'studentsView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'studentsList',
            height: 400,
            flex: 2
        },
        {
            xtype: 'panel',
            layout: { type: 'hbox', align: 'stretch'},
            defaults:{
                margin: 10
            },
            items:[
                {
                    xtype: 'studentClasses',
                    height: 300,
                    flex: 1
                },
                {
                    xtype: 'studentDetails',
                    flex: 1
                }
            ]
        }
    ]
});
