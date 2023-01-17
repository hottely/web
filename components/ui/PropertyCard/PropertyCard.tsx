import Link from "@material-ui/core/Link";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useIsAuthenticated } from "lib/providers/Auth";
import { Fragment, useState } from "react";
import {
  Card,
  Controls,
  Dot,
  DotsContainer,
  Name,
  NextSlide,
  NoBedroom,
  Placeholder,
  PrevSlide,
  Slide,
} from "./styles";

const PropertyCard = (props) => {
  const [activeSlideNumber, setActiveSlideNumber] = useState(0);

  const nextSlide = () =>
    setActiveSlideNumber((activeSlideNumber + 1) % props.images.length);

  const prevSlide = () =>
    setActiveSlideNumber(
      (activeSlideNumber - 1 + props.images.length) % props.images.length
    );

  const isSingleSlide = () => props.images.length === 1;

  const slidesStyles = props.images.map((src, i) =>
    i === activeSlideNumber ? { opacity: 1 } : { opacity: 0 }
  );
  const dotsStyles = props.images.map((src, i) =>
    i === activeSlideNumber
      ? { opacity: 1, width: 10, height: 10 }
      : { opacity: 0.7 }
  );

  const slides = props.images.map(
    (image, i) =>
      (i === activeSlideNumber ||
        i === (activeSlideNumber + 1) % props.images.length ||
        i ===
          (activeSlideNumber + props.images.length - 1) %
            props.images.length) && (
        <Slide
          src={image.url}
          key={"slide_" + i}
          onError={(e: any) => {
            e.target.src = "/placeholder.png";
          }}
          style={slidesStyles[i]}
        />
      )
  );

  const isAuth = useIsAuthenticated();

  const dots = props.images.map((src, i) => (
    <Dot key={"dot_" + i} style={dotsStyles[i]} />
  ));

  return (
    <Card>
      <Controls>
        {!isSingleSlide() && (
          <div>
            <PrevSlide>
              <ChevronLeftIcon onClick={prevSlide} />
            </PrevSlide>
            <NextSlide>
              <ChevronRightIcon onClick={nextSlide} />
            </NextSlide>
            <DotsContainer>{dots}</DotsContainer>
          </div>
        )}
        <Placeholder src={"/placeholder.png"} />
      </Controls>
      <Link href={`/property/${props.id}`}>
        <Fragment>{slides}</Fragment>

        {!props.noContent && (
          <div>
            <NoBedroom>{props.bedrooms} BEDROOM</NoBedroom>
            <Name>{props.name}</Name>
            <div>{props.price}€ per day</div>
          </div>
        )}
      </Link>
    </Card>
  );
};

export default PropertyCard;