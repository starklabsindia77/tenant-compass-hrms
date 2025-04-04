const { SystemConfig } = require('../models');  // Assuming the model for system_config is created in models

class SystemConfigService {
  // Get system-wide configurations
  static async getSystemConfig() {
    const configs = await SystemConfig.findAll();
    const configMap = {};
    
    configs.forEach(config => {
      configMap[config.config_key] = config.config_value;
    });

    return configMap;
  }
}

module.exports = SystemConfigService;
