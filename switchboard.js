const AuthenticationSwitch = require('./triggers/authentication_switch').AuthenticationSwitch;
const GenericSwitch = require('./triggers/generic_switch').GenericSwitch;
const electron = require('electron');
const DiscordClient = require('discord.io');
const login_json = require('./config/login.json');
const commands_json = require('./config/commands.json');

var client = new DiscordClient(login_json.credentials);

const app = electron.app;
const globalShortcut = electron.globalShortcut;

var authenticator = new AuthenticationSwitch(login_json, client);

var actions = [];
commands_json.forEach(function(command){
  actions.push(new GenericSwitch(command, client));
});

app.on('ready', function(){
  globalShortcut.register(authenticator.loginKey, function(){
    authenticator.login();
  });
  globalShortcut.register(authenticator.logoutKey, function(){
    authenticator.logout();
  });
  actions.forEach(function(trigger){
    globalShortcut.register(trigger.hotkey, function(){
      trigger.performAction();
    });
  });
  console.log("Services are up and Running...");
});
