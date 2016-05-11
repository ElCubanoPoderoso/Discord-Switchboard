function GenericSwitch(command_json, bot){
    this.name = command_json.name;
    this.hotkey = command_json.hotkey;
    this.content = command_json.content;
    this.bot = bot;
  }
GenericSwitch.prototype.performAction = function(){
    console.log(this.name + " was triggered.");
    this.bot.sendMessage(this.content);
  }
exports.GenericSwitch = GenericSwitch;
