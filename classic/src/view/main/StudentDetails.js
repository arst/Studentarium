/**
 * This view is an example list of people.
 */
Ext.define('Test.view.main.StudentDetails', {
    extend: 'Ext.panel.Panel',
    xtype: 'studentdetails',
    title: 'Details',
    layout: 'column',
    defaults: {
        padding: 10,
    },
    items:[
        {
            xtype: 'panel',
            columnWidth: 0.2,
            html: '<img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />'
        },
        {
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            columnWidth: 0.4,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'First Name',
                    labelAlign: 'left',
                    bind: '{studentsList.selection.firstName}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Middle Name',
                    bind: '{studentsList.selection.middleName}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Last Name',
                    bind: '{studentsList.selection.lastName}'
                } 
            ]
        },
        {
            xtype: 'panel', 
            columnnWidth: 0.4,
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Class',
                    labelAlign: 'left',
                     bind: '{studentsList.selection.class}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Year Entered',
                     bind: '{studentsList.selection.enteredAt}'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Graduate at'
                } 
            ]
        }
    ]
});
