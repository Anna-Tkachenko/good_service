import { Request, Response } from 'express';
import * as goodService from '../services/goods';

export const getAll = async (req: Request, res: Response) => {
    const goods = await goodService.getAllWithColors();

    res.send(goods);
}