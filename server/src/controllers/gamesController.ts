import { Request, Response } from 'express';
import pool from '../database';

class GamesController{
    public async list (req : Request, res : Response): Promise<void> {
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne (req : Request, res : Response): Promise<any>{
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if (games.length > 0) {
            res.json(games[0]);
        } else {
            res.json({message: "Game can't be found"});
        }
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO games SET ?', [req.body]);
        res.json({message: 'game saved' });
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id])
        res.json({message: 'Game ' + req.params.id + ' updated'})
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: 'Game ' + req.params.id + ' deleted'})
    }
}

const gamesController = new GamesController();

export default gamesController;