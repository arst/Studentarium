Ext.define('Test.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Studentarium',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    formulas :{
        studentPhotoHtml :{
            bind: '{studentsList.selection.photo}',
            get: function(data){
                var result = "";
                if(data){
                    result = "<div style='width:200px;height:200px'><img src='" + data + "'/>";
                }

                return result;
            }
        }
    }
});