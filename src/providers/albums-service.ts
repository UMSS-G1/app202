import { Injectable } from '@angular/core';

@Injectable()
export class AlbumsService {

  constructor() {
    console.log('Hello AlbumsService Provider');
  }

  getAll(){
    return [
      {
        title:'Mis vacaciones',
        cover: 'http://placehold.it/350x150',
        gallery:[
          {
            img: 'http://placehold.it/400x400',
            title: 'colombia'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'bolivia'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'peru'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'argentina'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'chile'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'brasil'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'uruguay'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'venezuela'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'costa rica'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'paraguay'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'ecuador'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'panama'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'mexico'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'suiza'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'guatemala'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'colombia'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'bolivia'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'peru'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'argentina'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'chile'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'brasil'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'uruguay'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'venezuela'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'costa rica'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'paraguay'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'ecuador'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'panama'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'mexico'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'suiza'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'guatemala'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'colombia'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'bolivia'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'peru'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'argentina'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'chile'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'brasil'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'uruguay'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'venezuela'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'costa rica'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'paraguay'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'ecuador'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'panama'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'mexico'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'suiza'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'guatemala'
          },
        ]
      },
      {
        title:'Mis vacaciones 2',
        cover: 'http://placehold.it/350x150',
        gallery:[
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 2'
          },
        ]
      },
      {
        title:'Mis vacaciones 3',
        cover: 'http://placehold.it/350x150',
        gallery:[
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 2'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 3'
          }
        ]
      }
    ]
  }

}
