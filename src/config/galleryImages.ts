import { GalleryItem } from './types';
import thumbnail1 from '../assets/thumbnail1.jpg';
import thumbnail2 from '../assets/thumbnail2.jpg';
import thumbnail3 from '../assets/thumbnail3.jpg';
import thumbnail4 from '../assets/thumbnail4.jpg';
import thumbnail5 from '../assets/thumbnail5.jpg';


export const galleryImages: GalleryItem[] = [
  {
    url: 'https://my-video-bucket-2025.s3.us-east-2.amazonaws.com/Video1.mp4',
    description: 'Arte Musical',
    type: 'video',
    poster: thumbnail1
  },
  {
    url: '/images/optimized/picture5.webp',
    description: 'Momentos Especiales',
    type: 'image'
  },
  {
    url: '/images/optimized/picture6.webp',
    description: 'Energia, Pasion Y Ritmo!',
    type: 'image'
  },
  {
    url: 'https://my-video-bucket-2025.s3.us-east-2.amazonaws.com/Video2.mp4',
    description: 'Ritmo Unico',
    type: 'video',
    poster: thumbnail2
  },
  {
    url: 'https://my-video-bucket-2025.s3.us-east-2.amazonaws.com/Video3.mp4',
    description: 'Tonos Vibrantes',
    type: 'video',
    poster: thumbnail3
  },
  {
    url: '/images/optimized/picture7.webp',
    description: 'Sonrisas Compartidas',
    type: 'image'
  },
  {
    url: '/images/optimized/picture8.webp',
    description: 'Alegria Pura',
    type: 'image'
  },
  {
    url: 'https://my-video-bucket-2025.s3.us-east-2.amazonaws.com/Video4.mp4',
    description: 'Noche de Baile',
    type: 'video',
    poster: thumbnail4
  },
  {
    url: 'https://my-video-bucket-2025.s3.us-east-2.amazonaws.com/Video5.mp4',
    description: 'Chispa, y Energia!',
    type: 'video',
    poster: thumbnail5
  }
];