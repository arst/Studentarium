/**
 * This view is an example list of people.
 */
Ext.define('Test.view.main.StudentsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentsList',

    requires: [
        'Test.store.Students',
        'Test.view.editors.StudentEditor',
        'Test.view.main.StudentsListController'
    ],
    autoLoad: true,
    title: 'Students',
    reference: 'studentsList',
    controller: 'studentsList',
    dockedItems: [
        {
            xtype: 'button',
            text: 'New',
            listeners: {
                click: 'onNewStudentButtonClick'
            }
        }
    ],
    columns: [
        { text: 'Name', dataIndex: 'fullName', flex: 1 },
        { text: 'Date of Birth', dataIndex: 'dateOfBirth', flex: 1 },
        { text: 'Class', dataIndex: 'class', flex: 1 },
        { text: 'Avg. Score', dataIndex: 'averageScore', width: 150 },
        {
            xtype: 'actioncolumn',
            width: 100,
            align: 'center',
            items: [
                {
                    glyph: 'xf095@FontAwesome',
                    style: 'color:#ff0000',
                    tooltip: 'Contact',
                    handler: function (grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        if (rec) {
                            var ctxMenu = Ext.create('Ext.menu.Menu', {
                                width: 140,
                                items: [{
                                    text: 'Mail',
                                    href: "mailto:test@i.ua"
                                }, {
                                    text: 'Phone',
                                    href: "tel:18475555555"
                                }]
                            });
                            ctxMenu.showAt(this.getXY());
                        }
                    }
                },
                {
                    glyph: 'xf044@FontAwesome',
                    tooltip: 'Edit',
                    handler: function (grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        if (rec) {
                            var editor = Ext.create("Test.view.editors.StudentEditor");
                            editor.loadRecord(rec);
                            editor.show();

                        }
                    }
                },
                {
                    glyph: 'xf00d@FontAwesome',
                    tooltip: 'Remove',
                    handler: function (grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        if (rec) {
                            rec.erase();
                        }
                    }
                }
            ]
        }
    ],

    store: {
        type: 'students'
    }
});
