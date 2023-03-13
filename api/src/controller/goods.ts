import { Request, Response } from 'express';
import * as goodService from '../services/goods';

export const getAll = async (req: Request, res: Response) => {
    const goods = await goodService.getAll();

    res.send(goods);
}

export const getOne = async (req: Request, res: Response) => {
    const { goodId } = req.params;

    if (isNaN(+goodId)) {
        res.sendStatus(422);
        return;
    }

    const foundGood = await goodService.getById(+goodId);

    if (!foundGood) {
        res.sendStatus(404);
        return;
    }

    res.send(foundGood);
}

export const addGood = async (req: Request, res: Response) => {
    const { name, colorId } = req.body;

    if (!name || !colorId) {
        res.sendStatus(422);
        return;
    }

    const good = await goodService.addGood(name, +colorId);

    res.status(201);
    res.send(good);
}

export const removeGood = async (req: Request, res: Response) => {
    const { goodId } = req.params;
    const foundGood = await goodService.getById(+goodId);

    if (!foundGood) {
        res.sendStatus(404);
        return;
    }

    await goodService.removeGood(+goodId);
    res.sendStatus(204);
}