import type { ExtensionContext } from '@podman-desktop/api';
import * as extensionApi from '@podman-desktop/api';

/**
 * Matrix Theme Extension for Podman Desktop
 * This extension provides Matrix-inspired green themes (both dark and light variants).
 */

// Initialize the activation of the extension.
export async function activate(extensionContext: ExtensionContext): Promise<void> {
  console.log('starting matrix theme extension');

  // The themes are automatically registered via the package.json "contributes.themes" section
  //extensionApi.window.showInformationMessage('Matrix Theme Extension activated! Check Settings > Appearance to select Matrix Dark or Matrix Light theme.');
}

// Deactivate the extension
export async function deactivate(): Promise<void> {
  console.log('stopping matrix theme extension');
}
