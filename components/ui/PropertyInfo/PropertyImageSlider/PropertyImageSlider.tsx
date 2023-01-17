import Carousel from "react-material-ui-carousel";

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

const PropertyImageSlider = ({ images }) => {
  return (
    <div style={{ color: "black", position: "relative", width: "100%" }}>
      <Carousel indicators navButtonsAlwaysVisible timeout={100}>
        {images.map((image, i) => (
          <Item key={i} item={{ src: image.url }} />
        ))}
      </Carousel>
    </div>
  );
};

export default PropertyImageSlider;
