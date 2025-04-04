 
// controllers/pluginController.js

const PluginManager = require('../services/pluginManager');

class PluginController {
  // Install a plugin for a tenant
  static async installPlugin(req, res) {
    const { tenantId, pluginName, pluginSettings } = req.body;

    try {
      await PluginManager.installPlugin(tenantId, pluginName, pluginSettings);
      return res.status(200).json({ message: `${pluginName} plugin installed and enabled for tenant ${tenantId}.` });
    } catch (error) {
      return res.status(500).json({ message: 'Error installing plugin', error: error.message });
    }
  }

  // Uninstall a plugin for a tenant
  static async uninstallPlugin(req, res) {
    const { tenantId, pluginName } = req.body;

    try {
      await PluginManager.uninstallPlugin(tenantId, pluginName);
      return res.status(200).json({ message: `${pluginName} plugin uninstalled for tenant ${tenantId}.` });
    } catch (error) {
      return res.status(500).json({ message: 'Error uninstalling plugin', error: error.message });
    }
  }

  // Get all plugins for a tenant
  static async getPluginsForTenant(req, res) {
    const { tenantId } = req.params;

    try {
      const plugins = await PluginManager.getPluginsForTenant(tenantId);
      return res.status(200).json(plugins);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching plugins for tenant', error: error.message });
    }
  }

  // Get the status of a specific plugin for a tenant
  static async getPluginStatus(req, res) {
    const { tenantId, pluginName } = req.params;

    try {
      const status = await PluginManager.getPluginStatus(tenantId, pluginName);
      return res.status(200).json({ pluginName, status });
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching plugin status', error: error.message });
    }
  }
}

module.exports = PluginController;
