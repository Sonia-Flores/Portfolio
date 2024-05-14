const Project = require('../models/project.model');


const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.json({
            message: 'No se han podido obtener los proyectos',
            fatal: error.message
        })
    }
}

const createProject = async (req, res) => {
    try {
      const newProject = await Project.create(req.body);
      res.json(newProject)
    } catch (error) {
        res.json({
            message: 'No se ha podido insertar el proyecto',
            fatal: error.message
        })
    }    
}

const updateProject = async (req, res) => {
    const { projectId } = req.params;
    
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            req.body,
            { new : true }
        );
        res.json(updatedProject);
    } catch (error) {
        res.json({
            message: 'No se ha podido actualizar el proyecto',
            fatal: error.message
        })
    }
}

const deleteProjectById = async (req, res) => {
    const { projectId } = req.params;

    try {
        const deletedProject = await Project.findByIdAndDelete(projectId)
        res.json({
            message: 'Se ha borrado el proyecto correctamente',
            deletedProject: deletedProject
        });

    } catch (error) {
        res.json({
            message: 'No se ha podido eliminar el proyecto',
            fatal: error.message
        });
    }
}

module.exports = {
    getAllProjects,
    createProject,
    updateProject,
    deleteProjectById
};