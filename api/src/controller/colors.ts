import { Request, Response } from 'express';
import * as colorService from '../services/colors';

export const getAll = async (req: Request, res: Response) => {
    const colors = await colorService.getAll();

    res.send(colors);
}

export const getOne = async (req: Request, res: Response) => {
    const { colorId } = req.params;

    if (isNaN(+colorId)) {
        res.sendStatus(422);
        return;
    }

    const foundColor = await colorService.getById(+colorId);

    if (!foundColor) {
        res.sendStatus(404);
        return;
    }

    res.send(foundColor);
}