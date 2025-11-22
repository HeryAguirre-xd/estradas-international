import GalleryItem from './GalleryItem';
import { galleryImages } from '../../config/galleryImages';

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryImages.map((item, index) => (
        <GalleryItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}