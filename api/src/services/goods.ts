import {Good} from "../models/Good";
import {Color} from "../models/Color";

export const getAll = async () => {
    return Good.findAll();
}

export const getAllWithColors = async () => {
    return Good.findAll({
        include: {
            model: Color,
        },
    });
}

export const getById = async (goodId: number) => {
    return Good.findByPk(goodId);
}

export const addGood = async (name: string, colorId: number) => {
    return Good.create({
        name,
        colorId,
    });
}

export const removeGood = async (goodId: number) => {
    await Good.destroy({
        where: {
            id: goodId,
        }
    })
}