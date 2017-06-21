Ext.define('Test.view.editors.StudentEditorsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.studentEditors',
    
    onOkButtonClick: function onOkButtonClick() {
        var me = this;
        var form = me.lookupReference('studentForm');
        
        if(form){
            var record = form.getRecord();
            
            if(record){
                record.save();
            }
        }
    }
});
