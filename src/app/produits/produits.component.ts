import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  row = [
    {
      id: 1,
      name: 'lorem ipsum',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      image: 'https://source.unsplash.com/random/300x300/?coktails',
    },
    {
      id: 2,
      name: 'lorem ipsum',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      image: 'https://source.unsplash.com/random/301x300/?coktail',
    },
    {
      id: 3,
      name: 'lorem ipsum',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      image: 'https://source.unsplash.com/random/302x300/?cocktail',
    },
    {
      id: 4,
      name: 'lorem ipsum',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      image: 'https://source.unsplash.com/random/303x300/?coktails',
    },
    {
      id: 5,
      name: 'lorem ipsum',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      image: 'https://source.unsplash.com/random/302x300/?coktails',
    },
    {
      id: 6,
      name: 'lorem ipsum',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      image: 'https://source.unsplash.com/random/303x300/?coktails',
    },
    {
      id: 7,
      name: 'lorem ipsum',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      image: 'https://source.unsplash.com/random/305x300/?cocktail',
    },
    {
      id: 8,
      name: 'lorem ipsum',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      image: 'https://source.unsplash.com/random/304x300/?coktails',
    },
  ];
}
