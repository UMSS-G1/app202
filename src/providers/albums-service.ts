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
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
          },
          {
            img: 'http://placehold.it/400x400',
            title: 'img 1'
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
