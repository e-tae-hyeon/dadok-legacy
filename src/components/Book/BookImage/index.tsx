import Image from "next/image";
import React, { useState } from "react";

type Props = {
  imageSrc: string;
  alt: string;
};

function BookImage({ imageSrc, alt }: Props) {
  const [image, setImage] = useState(imageSrc);

  return (
    <Image
      src={image}
      onError={() => setImage("/images/book-empty.png")}
      width={103.45}
      height={150}
      quality={100}
      alt={alt}
      style={{
        width: 103.45,
        height: 150,
      }}
      className="rounded-lg shadow-lg"
    />
  );
}

export default BookImage;
