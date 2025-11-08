// plugins/withHardwareAcceleration.js
const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function withHardwareAcceleration(config) {
  return withAndroidManifest(config, (config) => {
    const manifest = config.modResults;
    const app = manifest.application?.[0];

    if (app) {
      // Add the hardware acceleration flag if not already present
      app.$['android:hardwareAccelerated'] = 'true';
      console.log("✅ Enabled hardware acceleration in AndroidManifest.xml");
    }

    return config;
  });
};
