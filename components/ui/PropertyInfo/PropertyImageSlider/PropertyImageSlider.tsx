import { Button } from "@material-ui/core";
import { useIsAuthenticated } from "lib/providers/Auth";
import Carousel from "react-material-ui-carousel";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} from "generated/graphql";

function Item({ item }) {
  return (
    <div
      style={{
        height: 600,
        background: `url(${item.src})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}

const PropertyImageSlider = ({ images, favorite, id, refetch }) => {
  const isAuth = useIsAuthenticated();

  const [addToFavorites] = useAddToFavoritesMutation({
    variables: { propertyId: id },
  });
  const [removeFromFavorites] = useRemoveFromFavoritesMutation({
    variables: { propertyId: id },
  });

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
    <div style={{ color: "black", position: "relative", width: "100%" }}>
      <div style={{ position: "relative", zIndex: 10 }}>
        {isAuth && (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            style={{
              position: "absolute",
              right: 20,
              top: 20,
              zIndex: 1,
            }}
            onClick={toggleFavorites}
          >
            <FavoriteIcon style={{ display: favorite ? "block" : "none" }} />
            <FavoriteBorderIcon
              style={{ display: favorite ? "none" : "block" }}
            />
            <span style={{ marginLeft: 3 }}>Favorite</span>
          </Button>
        )}
      </div>
      <Carousel autoPlay={false} indicators navButtonsAlwaysVisible>
        {images.map((image, i) => (
          <Item key={i} item={{ src: image.url }} />
        ))}
      </Carousel>
    </div>
  );
};

export default PropertyImageSlider;
