const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { checkRole } = require('../middleware/auth');
const { getAuditLogs } = require('../controllers/auditLogController');

router.get('/', authMiddleware, checkRole(['superadmin', 'admin']), getAuditLogs);

module.exports = router;
