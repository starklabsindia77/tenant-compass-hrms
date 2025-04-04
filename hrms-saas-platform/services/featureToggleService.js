// services/featureToggleService.js

const { FeatureToggle } = require('../models');

class FeatureToggleService {
  // Enable or disable a feature for a tenant
  static async toggleFeature(tenantId, featureName, isEnabled) {
    // Check if the feature exists for the tenant
    const feature = await FeatureToggle.findOne({
      where: { tenant_id: tenantId, feature_name: featureName },
    });

    if (feature) {
      // Update the existing feature
      feature.is_enabled = isEnabled;
      await feature.save();
    } else {
      // If the feature doesn't exist for the tenant, create it
      await FeatureToggle.create({
        tenant_id: tenantId,
        feature_name: featureName,
        is_enabled: isEnabled,
      });
    }
  }

  // Get the status of all features for a tenant
  static async getTenantFeatures(tenantId) {
    const features = await FeatureToggle.findAll({
      where: { tenant_id: tenantId },
    });

    const featureMap = {};
    features.forEach(feature => {
      featureMap[feature.feature_name] = feature.is_enabled;
    });

    return featureMap;
  }

  // Check if a specific feature is enabled for a tenant
  static async isFeatureEnabled(tenantId, featureName) {
    const feature = await FeatureToggle.findOne({
      where: { tenant_id: tenantId, feature_name: featureName },
    });

    return feature ? feature.is_enabled : false; // Default to false if the feature is not found
  }
}

module.exports = FeatureToggleService;
