Ext.define('Test.view.editors.StudentEditorsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.studentEditors',
    
    onOkButtonClick: function onOkButtonClick() {
        var me = this;
        var form = me.lookupReference('studentForm');
        
        if(form){
            var record = form.getRecord();
            
            if(record && form.isValid()){
                me.getView().setLoading(true);
                form.updateRecord();
                record.save({
                    failure: function(){
                        Ext.Msg.alert('Error', 'Save operation failed.', Ext.emptyFn);
                    },
                    callback: function(){
                        me.getView().setLoading(false);
                    }
                });
            }
        }
    },
    onCancelButtonClick: function onCancelButtonClick(){
        var me = this;
        me.getView().close();
    }
});
