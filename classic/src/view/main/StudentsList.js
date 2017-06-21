/**
 * This view is an example list of people.
 */
Ext.define('Test.view.main.StudentsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentsList',

    requires: [
        'Test.store.Students',
        'Test.view.editors.StudentEditor'
    ],
    autoLoad: true,
    title: 'Students',
    reference: 'studentsList',
    columns: [
        { text: 'Name', dataIndex: 'fullName', flex: 1},
        { text: 'Date of Birth', dataIndex: 'dateOfBirth', flex: 1},
        { text: 'Class', dataIndex: 'class', flex: 1 },
        { text: 'Avg. Score', dataIndex: 'averageScore', width: 150 },
        {
            xtype: 'actioncolumn', 
            width: 100,
            align: 'center',
            items:[
                {
                    glyph: 'xf095@FontAwesome',
                    style: 'color:#ff0000',
                    //glyph: 'fa fa-pencil fa-2x',
                    tooltip: 'Contact',
                    handler: function(grid, rowIndex, colIndex){
                        var rec = grid.getStore().getAt(rowIndex);
                        if(rec){
                            //some action goes here
                        }
                    }
                },
                {
                    glyph: 'xf044@FontAwesome',
                    tooltip: 'Edit',
                    handler: function(grid, rowIndex, colIndex){
                        var rec = grid.getStore().getAt(rowIndex);
                        if(rec){
                            var editor = Ext.create("Test.view.editors.StudentEditor");
                            editor.loadRecord(rec);
                            editor.show();
                            
                        }
                    }
                },
                 {
                    glyph: 'xf00d@FontAwesome',
                    tooltip: 'Remove',
                    handler: function(grid, rowIndex, colIndex){
                        var rec = grid.getStore().getAt(rowIndex);
                        if(rec){
                            //some action goes here
                        }
                    }
                }
            ]
        }
    ],
    
    store: {
        type: 'students'
    },
    /*
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }*/
});
