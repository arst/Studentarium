/**
 * This view is an example list of people.
 */
Ext.define('Test.view.students.StudentDetailsView', {
    extend: 'Ext.panel.Panel',
    xtype: 'studentDetails',
    height: 300,
    title: 'Details',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'image',
            bind: {
                src: '{studentsList.selection.photo}'
            },
        },
        {
            xtype: 'panel',
            layout: 'column',
            items: [
                {
                    xtype: 'container',
                    defaults: {
                        xtype: 'textfield',
                        readOnly: true,
                        margin: '2'
                    },
                    items: [
                        {
                            fieldLabel: 'First Name',
                            bind: '{studentsList.selection.firstName}'
                        },
                        {
                            fieldLabel: 'Middle Name',
                            bind: '{studentsList.selection.middleName}'
                        },
                        {
                            fieldLabel: 'First Name',
                            bind: '{studentsList.selection.lastName}'
                        },
                        {
                            fieldLabel: 'Date of Birth',
                            bind: '{studentsList.selection.dateOfBirth}'
                        },
                    ]
                },
                {
                    xtype: 'container',
                    defaults: {
                        xtype: 'textfield',
                        readOnly: true,
                        margin: '2'
                    },
                    items: [
                        {
                            fieldLabel: 'Entered At',
                            bind: '{studentsList.selection.enteredAt}'
                        },
                        {
                            xtype: 'textfield',
                            readOnly: true,
                            fieldLabel: 'Class',
                            bind: '{studentsList.selection.class}'
                        },
                        {
                            fieldLabel: 'Phone',
                            bind: '{studentsList.selection.phone}'
                        },
                        {
                            fieldLabel: 'E-mail',
                            bind: '{studentsList.selection.email}'
                        }
                    ]
                }
            ]
        }
    ]
});
