/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Test.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Test.view.messenger.MessengerMainView',
        'Test.view.news.NewsMainView',
        'Test.view.main.MainController',
        'Test.view.main.MainModel',
        'Test.view.main.List',
        'Test.view.main.StudentsList',
        'Test.view.main.StudentDetails'
    ],
    //layout: {type: 'vbox', align: 'stretch'},
    //title: 'Studentarium',
    controller: 'main',
    viewModel: 'main',
    items: [
        {
            xtype: 'tabpanel',
            ui: 'navigation',

            tabBarHeaderPosition: 1,
            titleRotation: 0,
            tabRotation: 0,

            header: {
                layout: {
                    align: 'stretchmax'
                },
                title: {
                    bind: {
                        text: '{name}'
                    },
                    flex: 0
                },
                iconCls: 'fa-th-list'
            },
            tabBar: {
                flex: 1,
                layout: {
                    align: 'stretch',
                    overflowHandler: 'none'
                }
            },
            items: [
               {
                   title: 'Students',
                   minHeight: 650,
                   layout: {
                       type: 'vbox',
                       align: 'stretch'
                   },
                   items:[
                        {
                            xtype: 'studentsList',
                            flex: 5
                        },
                        {
                            xtype: 'studentdetails',
                            flex: 2
                        }
                   ]
               },{
                   title: 'News1',
                   items: [
                       {
                           xtype: 'newsMainView',
                           height: 1000
                       }
                   ]
               },
               {
                   title: 'Messenger',
                   items:[
                        {
                            xtype: 'messengerMainView'
                        }
                   ]
               }
            ]
        }
    ],
    /*
    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },
  
    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    }
   */
    /*
    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },*/
    /*
    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]*/
});
