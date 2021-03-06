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
    items: [
        {
            xtype: 'panel',
            columnWidth: 0.2,
            bind: {
                html: '{studentPhotoHtml}'
            }
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
                    readOnly: true,
                    fieldLabel: 'First Name',
                    labelAlign: 'left',
                    bind: '{studentsList.selection.firstName}'
                },
                {
                    xtype: 'textfield',
                    readOnly: true,
                    fieldLabel: 'Middle Name',
                    bind: '{studentsList.selection.middleName}'
                },
                {
                    xtype: 'textfield',
                    readOnly: true,
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
                    readOnly: true,
                    bind: '{studentsList.selection.class}'
                },
                {
                    xtype: 'datefield',
                    bind: '{studentsList.selection.enteredAt}',
                    readOnly: true,
                    labelAlign: 'left',
                    fieldLabel: 'Entered At'
                }
            ]
        }
    ]
});
