var vscode = require('vscode');
var blocks = require('./blocks.js');

function activate(context) {

    console.log('block-travel activated, registering commands...');

    var moveUp = vscode.commands.registerTextEditorCommand("block-travel.moveUp", function(editor) {
        blocks.blockTravelUp(editor)
    });
    var selectUp = vscode.commands.registerTextEditorCommand("block-travel.selectUp", function(editor) {
        blocks.blockSelectUp(editor)
    })
    var moveDown = vscode.commands.registerTextEditorCommand("block-travel.moveDown", function(editor) {
        blocks.blockTravelDown(editor)
    });
    var selectDown = vscode.commands.registerTextEditorCommand("block-travel.selectDown", function(editor) {
        blocks.blockSelectDown(editor)
    })

    context.subscriptions.push(moveUp, selectUp, moveDown, selectDown);
    console.log("Commands registered.")
}
exports.activate = activate;

function deactivate() {
    // Currently nothing...
}
exports.deactivate = deactivate;