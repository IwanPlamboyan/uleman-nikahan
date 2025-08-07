import FsLightbox from "fslightbox-react";
import { useState } from "react";

const Sample1Gallery = ({ galleries }) => {
  const [togglerGallery, setTogglerGallery] = useState(false);
  const [slideGallery, setSlideGallery] = useState(1);

  const handleClickImageGallery = (index) => {
    setSlideGallery(index + 1);
    setTogglerGallery(!togglerGallery);
  };

  return (
    <section id="gallery" className="py-14 px-3 md:px-1 relative">
      <div className="flex items-center space-x-5">
        <hr className="w-full border border-[#997857]" />
        <h1 className="font-cardo text-5xl text-[#997857]">Gallery</h1>
      </div>

      <div>
        <div className="pt-14 grid grid-cols-12 gap-1.5 md:gap-3">
          {galleries.map((gallery, index) => (
            <div className={gallery.className} key={index}>
              <img
                src={gallery.image}
                onClick={() => handleClickImageGallery(index)}
                alt={`thumbnail-${gallery.id}`}
                className="object-cover mx-auto w-full h-full cursor-pointer"
              />
            </div>
          ))}
        </div>

        <FsLightbox
          toggler={togglerGallery}
          sources={galleries.map((item) => item.image)}
          slide={slideGallery}
        />
      </div>
    </section>
  );
};

export default Sample1Gallery;
