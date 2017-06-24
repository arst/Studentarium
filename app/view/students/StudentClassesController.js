Ext.define('Test.view.students.StudentClassesController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.studentClasses',
    
    groupByStudentClassesChanged: function groupByStudentClassesChanged(menuItem){
        var me = this;
        me.getView().getStore().setGroupField(menuItem.text);
    }
});
