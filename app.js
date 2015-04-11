/**
 * Created by Sundeep on 4/11/2015.
 */

Ext.define('MyApp.MyPanel', {
    extend      : 'Ext.Panel',
    width       : 200,
    height      : 150,
    bodyPadding : 5
});

Ext.application({
    name   : 'MyApp',

    launch : function() {

        Ext.create('MyApp.MyPanel', {
            renderTo :Ext.getBody(),
            title    : 'My First Panel',
            html     : 'My First Panel'
        });

        Ext.create('MyApp.MyPanel', {
            renderTo : Ext.getBody(),
            title    : 'My Second Panel',
            html     : 'My Second Panel'
        });
    }
});