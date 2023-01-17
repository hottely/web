import BathtubIcon from "@material-ui/icons/Bathtub";
import HotelIcon from "@material-ui/icons/Hotel";
import PetsIcon from "@material-ui/icons/Pets";
import BookPropertyDialog from "components/modals/BookPropertyDialog";
import { useIsAuthenticated } from "lib/providers/Auth";

import Router from "next/router";
import { Fragment } from "react";
import styled from "styled-components";
import HottelyButton from "../HottelyButton/HottelyButton";
import ImageListItem from "./ImageListItem/ImageListItem";
import PropertyImageSlider from "./PropertyImageSlider/PropertyImageSlider";

const ItemsList = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const About = styled.div`
  line-height: 1.75em;
  font-size: 1.1em;
  text-align: justify;
`;

const PageContainer = styled.div`
  @media only screen and (min-width: 1200px) {
    display: flex;
  }
  margin-top: 20px;
  padding-left: 5%;
  padding-right: 5%;
`;

const LeftContainer = styled.div`
  color: black;
  width: 60%;
  @media only screen and (max-width: 1200px) {
    display: block;
    width: 100%;
  }
`;

const PropertyForm = styled.div`
  position: fixed;
  right: 5%;
  top: 110px;
  padding: 2% 4%;
  background-color: white;
  box-shadow: 1px, 3px, 30px, 2px, rgba(0, 0, 0, 0.2) !important;
  border-radius: 5px;
  width: 30%;
  @media only screen and (max-width: 1200px) {
    display: block;
    width: auto;
    position: relative;
    right: 0%;
    top: 0px;
    margin: 5%;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0px;
`;

const PropertyInfo = ({ property }) => {
  const isAuth = useIsAuthenticated();

  const goToLogin = () => {
    Router.push("/login");
  };

  return (
    <div>
      <PageContainer>
        <LeftContainer>
          <PropertyImageSlider images={property.images} />

          <h1>{property.name}</h1>

          <ServicesContainer>
            <div>
              <HotelIcon
                style={{
                  display: "block",
                  width: 65,
                  height: 65,
                  fontSize: 60,
                  marginBottom: 10,
                  margin: "0px auto",
                }}
              />
              <span>
                {property.bedrooms}{" "}
                {property.bedrooms > 1 ? "bedrooms" : "bedroom"}
              </span>
            </div>
            <div>
              <BathtubIcon
                style={{
                  display: "block",
                  width: 65,
                  height: 65,
                  fontSize: 60,
                  marginBottom: 10,
                  margin: "0px auto",
                }}
              />
              <span>
                {property.bathrooms}{" "}
                {property.bathrooms > 1 ? "bathrooms" : "bathroom"}
              </span>
            </div>
            <div>
              {property.pets && (
                <Fragment>
                  <PetsIcon
                    style={{
                      display: "block",
                      width: 65,
                      height: 65,
                      fontSize: 60,
                      marginBottom: 10,
                      margin: "0px auto",
                    }}
                  />
                  <span>Pets allowed</span>
                </Fragment>
              )}
              {!property.pets && (
                <Fragment>
                  <PetsIcon
                    style={{
                      display: "block",
                      width: 65,
                      height: 65,
                      fontSize: 60,
                      marginBottom: 10,
                      margin: "0px auto",
                    }}
                  />
                  <span>Pets not allowed</span>
                </Fragment>
              )}
            </div>
          </ServicesContainer>

          <h2>About</h2>
          <About>{property.description}</About>

          {property.amenities && property.amenities.length !== 0 && (
            <div>
              <h2>Amenities</h2>
              <ItemsList>
                {property.amenities.map((x, i) => (
                  <div key={i} style={{ margin: "10px 0px", width: "50%" }}>
                    <ImageListItem text={x.name} />
                  </div>
                ))}
              </ItemsList>
            </div>
          )}
        </LeftContainer>
      </PageContainer>

      <PropertyForm>
        <h1>{property.price}€</h1>

        {isAuth && <BookPropertyDialog id={property.id} />}

        {!isAuth && (
          <HottelyButton
            type="submit"
            fullWidth
            color="primary"
            onClick={goToLogin}
          >
            Login to book it
          </HottelyButton>
        )}
      </PropertyForm>
    </div>
  );
};

export default PropertyInfo;
