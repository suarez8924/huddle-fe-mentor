import './ContentWithImage.scss';

interface ContentWithImageProps {
  heading: string;
  body: string;
  image: string;
  isReversed?: boolean;
}

export const ContentWithImage = ({
  heading,
  body,
  image,
  isReversed = false,
}: ContentWithImageProps) => {
  return (
    <section
      className={`content-with-image ${isReversed ? 'is-reversed' : ''}`}
    >
      <div className="content-wrapper">
        <h2 className="heading-regular"> {heading}</h2>
        <p className="body-regular">{body}</p>
      </div>
      <picture className="image-wrapper">
        <img src={image} alt="" />
      </picture>
    </section>
  );
};
