import AnimatedText from "../AnimateText";
import GalleryItem from "./GalleryItem";
import { galleryImages } from "./Images";

export default function Gallery() {
  return (
    <section className="w-full py-5 md:px-10 px-3">
      <div className="mx-auto max-w-6xl">

        {/* Título */}
        <div className="text-center mb-8">
          <AnimatedText
            text="Nuestra Historia"
            className="titulo text-[60px] text-gold-500"
          />

          <p className="subtitulo mt-3 text-lg text-ivory-50 max-w-2xl mx-auto leading-8">
            Cada fotografía representa un instante que nos acercó un poco más al
            día en que decidimos caminar juntos para siempre.
          </p>
        </div>

        {/* Galería */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-5
            bg-black/20
          "
        >
          {galleryImages.map((image) => (
            <GalleryItem
              key={image.id}
              src={image.src}
              alt={image.alt}
              size={image.size}
            />
          ))}
        </div>

      </div>
    </section>
  );
}