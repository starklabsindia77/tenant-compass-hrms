 
// routes/pluginRoutes.js

const express = require('express');
const router = express.Router();
const PluginController = require('../controllers/pluginController');

// Route to install a plugin for a tenant
router.post('/install', PluginController.installPlugin);

// Route to uninstall a plugin for a tenant
router.post('/uninstall', PluginController.uninstallPlugin);

// Route to get all plugins for a tenant
router.get('/:tenantId', PluginController.getPluginsForTenant);

// Route to get the status of a specific plugin for a tenant
router.get('/:tenantId/:pluginName', PluginController.getPluginStatus);

module.exports = router;
