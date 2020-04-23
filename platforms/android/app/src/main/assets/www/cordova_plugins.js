cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.scott.serviceDiscovery.serviceDiscovery",
      "file": "plugins/com.scott.serviceDiscovery/www/serviceDiscovery.js",
      "pluginId": "com.scott.serviceDiscovery",
      "clobbers": [
        "serviceDiscovery"
      ]
    },
    {
      "id": "cordova-plugin-zeroconf.ZeroConf",
      "file": "plugins/cordova-plugin-zeroconf/www/zeroconf.js",
      "pluginId": "cordova-plugin-zeroconf",
      "clobbers": [
        "cordova.plugins.zeroconf"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "com.scott.serviceDiscovery": "0.2.0",
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-zeroconf": "1.4.2"
  };
});