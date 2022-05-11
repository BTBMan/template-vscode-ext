import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('template.hello', () => {
      console.log('object');
    }),
    vscode.commands.registerTextEditorCommand('type', (...arg) => {
      console.log('register test editor command', arg);
    }),
  );
}
