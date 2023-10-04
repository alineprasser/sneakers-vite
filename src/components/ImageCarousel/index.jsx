
import "./styles.scss";

export default function ImageCarousel() {
  const imageList = [
    {
      path: "/tenis-1.png",
      id: 1,
      width: 166,
      height: 166,
      alt: "Um ângulo do tênis",
    },
    {
      path: "/tenis-2.png",
      id: 2,
      width: 166,
      height: 166,
      alt: "Um ângulo do tênis",
    },
    {
      path: "/tenis-3.png",
      id: 3,
      width: 166,
      height: 166,
      alt: "Um ângulo do tênis",
    },
    {
      path: "/tenis-4.png",
      id: 4,
      width: 166,
      height: 166,
      alt: "Um ângulo do tênis",
    },
  ];

  return (
    <div className='carousel'>
      <div className='list'>
        {imageList.map((image) => {
          return (
            <img
              key={image.id}
              src={image.path}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          );
        })}
      </div>
      <div className='highlight'>
        <img
          src="/tenis-5-b.png"
          alt="Imagem de um tênis bonito"
          width={359}
          height={359}
        />
      </div>
    </div>
  );
}
