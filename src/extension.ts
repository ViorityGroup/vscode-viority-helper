import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {

  // Open Viority Docs
  const ViorityHelperDocs = vscode.commands.registerCommand('viority-helper.openDocs', async () => {
    vscode.env.openExternal(vscode.Uri.parse("https://docs.viority.eu/"));
    vscode.window.showInformationMessage('📖 Viority Docs opened in your browser');
  });

  // About Command
  const ViorityHelperAbout = vscode.commands.registerCommand('viority-helper.about', async () => {
      const NotifySelection = await vscode.window.showInformationMessage('❤️ Thank you to use my extension', 'Repository', 'Discord', 'Creator');
      
      if (NotifySelection == 'Repository') {
        vscode.env.openExternal(vscode.Uri.parse("https://github.com/ViorityGroup/vscode-viority-helper"));
      } else if (NotifySelection == 'Discord') {
        vscode.env.openExternal(vscode.Uri.parse("https://discord.gg/323HfHyGW4"));
      } else if (NotifySelection == 'Creator') {
        vscode.env.openExternal(vscode.Uri.parse("https://github.com/Tuncion"));
      };
  });

  context.subscriptions.push(ViorityHelperDocs, ViorityHelperAbout);
};

export function deactivate() {}