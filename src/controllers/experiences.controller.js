const Experience = require('../models/experiencie.model');

const getAllExperiences = async (req,res) => {

    try {
        const experiences = await Experience.find();
        res.json(experiences);
    } catch (error) {
        res.json({
            message: 'No se han podido obtener las experiencias',
            fatal: error.message
        });
    }
}

const createExperience = async (req,res) => {
    try {
        const newExperience = await Experience.create(req.body);
        res.json(newExperience);
    } catch (error) {
        res.json({
            message: 'No se ha podido insertar la experiencia',
            fatal: error.message
        });
    }
}

const deleteExperienceById = async (req,res) => {
    const { experienceId } = req.params;
    try {
        const deleteExperience = await Experience.findByIdAndDelete(experienceId);
        res.json({
            message: 'Se ha borrado la experiencia correctamente',
            deleteExperience: deleteExperience
        });
    } catch (error) {
        res.json({
            message: 'No se ha podido eliminar la experiencia',
            fatal: error.message
        });
    }
}
module.exports= {
    getAllExperiences,
    createExperience,
    deleteExperienceById
}