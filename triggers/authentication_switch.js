function AuthenticationSwitch(login_json, bot){
    this.loginKey = login_json.loginKey;
    this.logoutKey = login_json.logoutKey;
    this.bot = bot;
  }
AuthenticationSwitch.prototype.login = function(){
    this.bot.connect();
    console.log("Login Triggered");
}
AuthenticationSwitch.prototype.logout = function(){
    this.bot.disconnect();
}
exports.AuthenticationSwitch = AuthenticationSwitch;
