import {Component, HostBinding, OnInit} from '@angular/core';
import { GamesService } from '../../services/games.service'
import { Game } from "../../models/Game";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  //games: Game[] = [];
  games: any = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    )
  }

  editGame(id: string): void{

  }

  deleteGame(id: string): void  {
    this.gamesService.deleteGame(id).subscribe(
       res => {
        console.log(res);
        this.getGames();
      },
      err => {
        console.log(err);
      }
    )
  }

}
