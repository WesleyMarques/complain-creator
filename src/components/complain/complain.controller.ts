import complainService from './complain.service';
import { HttpError } from '../../config/error';
import { IComplainModel } from './complain.model';
import { NextFunction, Request, Response } from 'express';

export class ComplainController {

  async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const complains: IComplainModel[] = await complainService.findAll();

      res.status(200).json(complains);
    } catch (error) {
      next(new HttpError(error.message.status, error.message));
    }
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const complain: IComplainModel = await complainService.findById(req.params.id);

      res.status(200).json(complain.toJSON());
    } catch (error) {
      next(new HttpError(error.message.status, error.message));
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const complain: IComplainModel = await complainService.insert(req.body);
      res.status(201).json(complain.toJSON());
    } catch (error) {
      next(new HttpError(error.message.status, error.message));
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const complain: IComplainModel = await complainService.remove(req.params.id);

      res.status(200).json(complain.toJSON());
    } catch (error) {
      next(new HttpError(error.message.status, error.message));
    }
  }

  async replace(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const complain: IComplainModel = await complainService.replace(req.params.id, req.body);
      res.status(201).json(complain.toJSON());
    } catch (error) {
      next(new HttpError(error.message.status, error.message));
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const complain: IComplainModel = await complainService.update(req.params.id, req.body);
      res.status(201).json(complain.toJSON());
    } catch (error) {
      next(new HttpError(error.message.status, error.message));
    }
  }
}
export default new ComplainController();
