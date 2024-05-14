const router = require('express').Router();
const { getAllProjects, createProject, updateProject, deleteProjectById } = require('../../controllers/projects.controller');

router.get('/', getAllProjects);
router.post('/', createProject);
router.put('/:projectId', updateProject);
router.delete('/:projectId', deleteProjectById);

module.exports = router;