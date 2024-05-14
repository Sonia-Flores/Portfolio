const { createExperience, getAllExperiences, deleteExperienceById } = require('../../controllers/experiences.controller');

const router = require('express').Router();

router.get('/', getAllExperiences);
router.post('/', createExperience);
router.delete('/:experienceId', deleteExperienceById);

module.exports = router;