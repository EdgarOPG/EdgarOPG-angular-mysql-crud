import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from "../../models/Game";
import { GamesService } from "../../services/games.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  defaultImage: string = "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101032/112815935-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6";

  game: Game = Object.create({
    id: null,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  });

  //edit: boolean = false;

  constructor(private gamesService: GamesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.gamesService.getGame(params.id).subscribe(
        res => {
          console.log(res);
          this.game = res;
        },
        err => console.log(err)
      )
    }
  }

  saveNewGame(): void {
    delete this.game.id;
    delete this.game.created_at;

    this.gamesService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games'])
      },
      err => console.error(err)
    )
  }

  saveGame(): void {
    //delete this.game.id;

    //this.game = {...this.game, created_at: undefined}

    delete this.game.created_at;
    console.log(this.game);

    if (this.game.id){
      console.log('actualizar');
      this.gamesService.updateGame(this.game.id, this.game).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games'])
        },
        err => console.error(err)
      )
    } else {
      console.log('guardar');
      this.gamesService.saveGame(this.game).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games'])
        },
        err => console.error(err)
      )
    }
  }

}
