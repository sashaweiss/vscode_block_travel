var vscode = require('vscode');
var blocks = require('./blocks.js');

function activate(context) {

    console.log('block-travel activated, registering commands...');

    var jumpUp = vscode.commands.registerTextEditorCommand("block-travel.jumpUp", function(editor) {
        blocks.blockTravelUp(editor)
    });
    var selectUp = vscode.commands.registerTextEditorCommand("block-travel.selectUp", function(editor) {
        blocks.blockSelectUp(editor)
    })
    var jumpDown = vscode.commands.registerTextEditorCommand("block-travel.jumpDown", function(editor) {
        blocks.blockTravelDown(editor)
    });
    var selectDown = vscode.commands.registerTextEditorCommand("block-travel.selectDown", function(editor) {
        blocks.blockSelectDown(editor)
    })

    context.subscriptions.push(jumpUp, selectUp, jumpDown, selectDown);
    console.log("Commands registered.")
}
exports.activate = activate;

function deactivate() {
    // Currently nothing...
}
exports.deactivate = deactivate;