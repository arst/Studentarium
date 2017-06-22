Ext.define('Test.view.editors.StudentEditor',{
    extend: 'Ext.window.Window',
    layout: 'fit',
    xtype: 'student-editor',
    alias: 'widget.student-editor',
    requires:[
        'Test.view.editors.StudentEditorsController'
    ],
    modal: true,
    controller: 'studentEditors',
    loadRecord: function(record){
        var me = this;
        me.down('form').loadRecord(record);
    },
    buttons:[
        {
            text: 'Ok',
            reference:'okBtn',
            formBind: true,
            listeners: {
                click: 'onOkButtonClick'
            }
        },
        {
            text: 'Cancel',
            reference: 'cancelBtn',
            listeners: {
                click: 'onCancelButtonClick'
            }
        }
    ],
    items: [
        {
            xtype: 'form',
            reference: 'studentForm',
            layout:{
                type: 'vbox',
                align: 'stretch'
            },
            items:[
               {
                    xtype: 'textfield',
                    fieldLabel: 'First Name',
                    labelAlign: 'left',
                    name:'firstName'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Middle Name',
                    name: 'middleName'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Last Name',
                    name: 'lastName'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date of Birth',
                    labelAlign: 'left',
                    name:'dateOfBirth'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Class',
                    labelAlign: 'left',
                    name: 'class'
                }
            ]
        }
    ]
});