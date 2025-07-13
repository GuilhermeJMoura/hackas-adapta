const { Router } = require('express');
const router     = Router();
const {
  createWorkflow,
} = require('../controllers/workflowController');

router.post('/', createWorkflow);          // POST /api/workflows

module.exports = router;
