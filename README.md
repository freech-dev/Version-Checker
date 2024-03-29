# Version Checker

This is just a little API to do version checks with your products

Feel free to addd anything to this script ect. Just hmu if you have any questions @freech_dev

# Freech's Development 

Join this discord for any support questions 

[![Developer Discord](https://discordapp.com/api/guilds/937762007401254981/widget.png?style=banner2)]([https://discord.com/invite/WjB5VFz](https://discord.gg/xfp9xCJNKV))

### Configuration

Configuration is done through the versions.json file and im planning to make a bot or something out of this but will do for now

### Developer Guide 

#### Using the API

This is how i have implemented the API but change the domain to your domain ect

```js
const chalk = require('chalk') 

async function requestVersion() {
  const response = await fetch(`https://versions.freechsdevelopment.com/version/request/1`);
  const versionData = await response.json();
  if (versionData === version) {
    console.log('[Version Manager]', chalk.green.bold('Version check passed'));
    return;
  } else {
    console.log(
      '[Version Manager]',
      chalk.red.bold('Version check failed please head to https://store.freechsdevelopment.com')
    );
    process.exit(1);
  }
}
```

