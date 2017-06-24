/**
 * This view is an example list of people.
 */
Ext.define('Test.view.students.StudentClassesView', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentClasses',
    controller: 'studentClasses',
    requires: [
        'Test.view.students.StudentClassesController'
    ],
    title: 'Classes',
    columns: [
        { text: 'Semester', dataIndex: 'Semester', flex: 1 },
        { text: 'Subject', dataIndex: 'Subject', flex: 1 },
        { text: 'Type', dataIndex: 'Type', flex: 1 }
    ],
    bind: {
        store: '{studentsList.selection.classes}'
    },
    features: [{
        ftype: 'grouping',
        groupHeaderTpl: '{columnName}: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
        hideGroupedHeader: true,
        startCollapsed: true,
        id: 'classesGrouping'
    }],
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [{
                text: 'Group By',
                destoryMenu: true,
                menu: [{
                    text: 'Semester',
                    handler: 'groupByStudentClassesChanged'
                },
                {
                    text: 'Subject',
                    handler: 'groupByStudentClassesChanged'
                },
                {
                    text: 'Type',
                    handler: 'groupByStudentClassesChanged'
                }]
            }]
        }
    ]
});
