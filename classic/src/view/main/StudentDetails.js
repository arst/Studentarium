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
            //html: '<img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />'

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
                    xtype: 'textfield',
                    readOnly: true,
                    fieldLabel: 'Year Entered',
                    bind: '{studentsList.selection.enteredAt}'
                },
                {
                    xtype: 'datefield',
                    readOnly: true,
                    fieldLabel: 'Graduate at'
                }
            ]
        }
    ]
});
