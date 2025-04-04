 
// routes/featureRoutes.js

const express = require('express');
const router = express.Router();
const FeatureController = require('../controllers/featureController');

// Route to enable or disable a feature for a tenant
router.post('/toggle', FeatureController.toggleFeature);

// Route to get all features for a tenant
router.get('/:tenantId', FeatureController.getTenantFeatures);

// Route to check if a specific feature is enabled for a tenant
router.get('/:tenantId/:featureName', FeatureController.isFeatureEnabled);

module.exports = router;
