 
// services/pluginManager.js

const { Plugin } = require('../models');

class PluginManager {
  // Install a plugin for a tenant
  static async installPlugin(tenantId, pluginName, pluginSettings = {}) {
    const plugin = await Plugin.findOne({ where: { tenant_id: tenantId, plugin_name: pluginName } });

    if (plugin) {
      if (plugin.plugin_status === 'enabled') {
        throw new Error(`${pluginName} plugin is already installed and enabled.`);
      }
      plugin.plugin_status = 'enabled';
      plugin.plugin_settings = pluginSettings; // Update the plugin settings
      await plugin.save();
    } else {
      await Plugin.create({
        tenant_id: tenantId,
        plugin_name: pluginName,
        plugin_status: 'enabled',
        plugin_settings: pluginSettings,
      });
    }
  }

  // Uninstall a plugin for a tenant
  static async uninstallPlugin(tenantId, pluginName) {
    const plugin = await Plugin.findOne({ where: { tenant_id: tenantId, plugin_name: pluginName } });

    if (plugin && plugin.plugin_status === 'enabled') {
      plugin.plugin_status = 'disabled';
      await plugin.save();
    } else {
      throw new Error(`${pluginName} plugin is not installed or already disabled.`);
    }
  }

  // Get all plugins for a tenant
  static async getPluginsForTenant(tenantId) {
    const plugins = await Plugin.findAll({
      where: { tenant_id: tenantId },
    });

    return plugins.map(plugin => ({
      plugin_name: plugin.plugin_name,
      plugin_status: plugin.plugin_status,
      plugin_settings: plugin.plugin_settings,
    }));
  }

  // Get the status of a specific plugin for a tenant
  static async getPluginStatus(tenantId, pluginName) {
    const plugin = await Plugin.findOne({
      where: { tenant_id: tenantId, plugin_name: pluginName },
    });

    if (!plugin) {
      throw new Error(`${pluginName} plugin is not installed.`);
    }

    return plugin.plugin_status;
  }
}

module.exports = PluginManager;
