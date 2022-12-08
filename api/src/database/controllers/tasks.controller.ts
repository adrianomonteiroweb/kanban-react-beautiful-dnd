import { Request, Response } from 'express';

import { tasks } from '../../data/tasks';

export class TasksController {
  private readonly _tasks = tasks;

  async getAllTasksController(_req: Request, res: Response): Promise<Response> {
    return res.status(200).json(this._tasks);
  }
}
