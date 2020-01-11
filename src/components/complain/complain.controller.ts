import UserService from './complain.service';
import { HttpError } from '../../config/error';
import { IComplainModel } from './complain.model';
import { NextFunction, Request, Response } from 'express';

export class ComplainController {
  listUsers(req: Request, res: Response): void {
    //res.status(200).send(ScheduleService.getDataRange(req.query["start"],req.query["end"]));
  }

  async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users: IComplainModel[] = await UserService.findAll();

      res.status(200).json(users);
    } catch (error) {
      next(new HttpError(error.message.status, error.message));
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user: IComplainModel = await UserService.findOne(req.params.id);

      res.status(200).json(user);
    } catch (error) {
      next(new HttpError(error.message.status, error.message));
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user: IComplainModel = await UserService.insert(req.body);

      res.status(201).json(user);
    } catch (error) {
      next(new HttpError(error.message.status, error.message));
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user: IComplainModel = await UserService.remove(req.params.id);

      res.status(200).json(user);
    } catch (error) {
      next(new HttpError(error.message.status, error.message));
    }
  }
}
export default new ComplainController();
