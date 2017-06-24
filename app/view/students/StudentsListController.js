Ext.define('Test.view.students.StudentsListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.studentsList',
    onNewStudentButtonClick: function (){
        var me = this;
        debugger;
        var newStudent = Ext.create('Test.model.Student');
        me.getView().getStore().add(newStudent);
        var editor = Ext.create('Test.view.editors.StudentEditor');
        editor.on('cancel', function(){
            me.getView().getStore().rejectChanges();
        })
        editor.loadRecord(newStudent);
        editor.show();
    }
});
