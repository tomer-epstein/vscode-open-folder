// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let cmd_openNewInstance = vscode.commands.registerCommand('extension.openNewInstance', (path: vscode.Uri) => {
        vscode.commands.executeCommand("vscode.openFolder", path, true);
    });

    let cmd_openHere = vscode.commands.registerCommand('extension.openHere', (path: vscode.Uri) => {
        vscode.commands.executeCommand("vscode.openFolder", path, false);
    });

    let cmd_openFolderDlg = vscode.commands.registerCommand('extension.openFolderDlg', () => {
        vscode.commands.executeCommand("vscode.openFolder");
    });

    context.subscriptions.push(cmd_openNewInstance);
    context.subscriptions.push(cmd_openHere);
    context.subscriptions.push(cmd_openFolderDlg);
}

// this method is called when your extension is deactivated
export function deactivate() {}
