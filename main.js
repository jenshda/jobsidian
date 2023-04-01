// Import the obsidian module
const { Plugin } = require('obsidian');

// Define the main plugin class
class MyPlugin extends Plugin {
  
  // On load function
  async onload() {
    console.log('Loading MyPlugin');

    // Register a command
    this.addCommand({
      id: 'my-plugin-command',
      name: 'My Plugin Command',
      callback: () => {
        console.log('My plugin command was executed');
      }
    });

    // Register an event listener
    this.registerEvent(this.app.workspace.on('file-open', (file) => {
      console.log(`File ${file.name} was opened`);
    }));
  }

  // On unload function
  onunload() {
    console.log('Unloading MyPlugin');
  }
}

// Export the plugin class
module.exports = MyPlugin;
