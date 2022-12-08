import express from 'express';

import { TasksController } from '../database/controllers/tasks.controller';

const tasksRouter = express.Router();

const tasksController = new TasksController();

tasksRouter.get('/api', (req, res) =>
  tasksController.getAllTasksController(req, res)
);

export default tasksRouter;
