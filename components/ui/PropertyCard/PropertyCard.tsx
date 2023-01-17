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
  Heart,
  Name,
  NextSlide,
  NoBedroom,
  Placeholder,
  PrevSlide,
  Slide,
} from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} from "generated/graphql";

const PropertyCard = ({
  id,
  name,
  bedrooms,
  price,
  images = [],
  favorite = false,
  refetch,
}) => {
  const [activeSlideNumber, setActiveSlideNumber] = useState(0);

  const [addToFavorites] = useAddToFavoritesMutation({
    variables: { propertyId: id },
  });
  const [removeFromFavorites] = useRemoveFromFavoritesMutation({
    variables: { propertyId: id },
  });
  const nextSlide = () =>
    setActiveSlideNumber((activeSlideNumber + 1) % images.length);

  const prevSlide = () =>
    setActiveSlideNumber(
      (activeSlideNumber - 1 + images.length) % images.length
    );

  const isSingleSlide = () => images.length === 1;

  const slidesStyles = images.map((src, i) =>
    i === activeSlideNumber ? { opacity: 1 } : { opacity: 0 }
  );
  const dotsStyles = images.map((src, i) =>
    i === activeSlideNumber
      ? { opacity: 1, width: 10, height: 10 }
      : { opacity: 0.7 }
  );

  const slides = images.map(
    (image, i) =>
      (i === activeSlideNumber ||
        i === (activeSlideNumber + 1) % images.length ||
        i === (activeSlideNumber + images.length - 1) % images.length) && (
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

  const dots = images.map((src, i) => (
    <Dot key={"dot_" + i} style={dotsStyles[i]} />
  ));

  const toggleFavorites = async () => {
    try {
      if (!favorite) {
        await addToFavorites();
      } else {
        await removeFromFavorites();
      }
      await refetch();
    } catch (error) {
      console.log("failed to toggle favorite");
    }
  };

  return (
    <Card>
      <Controls>
        {isAuth && (
          <Fragment>
            <Heart
              style={{ display: favorite ? "none" : "block" }}
              onClick={toggleFavorites}
            >
              <FavoriteBorderIcon />
            </Heart>

            <Heart
              style={{ display: favorite ? "block" : "none" }}
              onClick={toggleFavorites}
            >
              <FavoriteIcon />
            </Heart>
          </Fragment>
        )}
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
      <Link href={`/property/${id}`}>
        <Fragment>{slides}</Fragment>
        <div>
          <NoBedroom>{bedrooms} BEDROOM</NoBedroom>
          <Name>{name}</Name>
          <div>{price}€ per day</div>
        </div>
      </Link>
    </Card>
  );
};

export default PropertyCard;
