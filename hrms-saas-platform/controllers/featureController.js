 
// controllers/featureController.js

const FeatureToggleService = require('../services/featureToggleService');

class FeatureController {
  // Enable or disable a feature for a tenant
  static async toggleFeature(req, res) {
    const { tenantId, featureName, status } = req.body;

    try {
      await FeatureToggleService.toggleFeature(tenantId, featureName, status);
      return res.status(200).json({ message: `${featureName} feature has been ${status ? 'enabled' : 'disabled'} for tenant ${tenantId}.` });
    } catch (error) {
      return res.status(500).json({ message: 'Error toggling feature', error: error.message });
    }
  }

  // Get all features for a tenant
  static async getTenantFeatures(req, res) {
    const { tenantId } = req.params;
    try {
      const features = await FeatureToggleService.getTenantFeatures(tenantId);
      return res.status(200).json(features);
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving tenant features', error: error.message });
    }
  }

  // Check if a specific feature is enabled for a tenant
  static async isFeatureEnabled(req, res) {
    const { tenantId, featureName } = req.params;
    try {
      const isEnabled = await FeatureToggleService.isFeatureEnabled(tenantId, featureName);
      return res.status(200).json({ isEnabled });
    } catch (error) {
      return res.status(500).json({ message: 'Error checking feature status', error: error.message });
    }
  }
}

module.exports = FeatureController;
