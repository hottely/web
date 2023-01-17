import { Grid } from "@material-ui/core";
import DashboardLayout from "components/ui/Layout/DashboardLayout/DashboardLayout";
import LoadingIndicator from "components/ui/LoadingIndicator";
import PropertyCard from "components/ui/PropertyCard/PropertyCard";
import { useGetFavoritesQuery } from "generated/graphql";
import withAuth from "lib/hocs/withAuth";
import styled from "styled-components";

const Container = styled.div`
  color: black;
  padding: 20px 20px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  h2 {
    padding-left: 10px;
    font-weight: bold;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavoritesPage = () => {
  const { data, loading, refetch } = useGetFavoritesQuery();
  const favorites = data?.getFavorites || [];

  return (
    <DashboardLayout>
      <div style={{ display: "flex" }}>
        <Container>
          {loading && (
            <div>
              <LoadingIndicator />
            </div>
          )}

          {favorites.length === 0 && !loading && (
            <div>
              <h2>No properties found</h2>
              <div style={{ height: "calc(100vh - 200px)" }} />
            </div>
          )}

          {favorites.length !== 0 && !loading && (
            <div>
              <TitleContainer>
                <h2>Favorites</h2>
              </TitleContainer>
              <Grid container spacing={3}>
                {favorites.map((property, index) => (
                  <Grid
                    key={index}
                    style={{ marginTop: 10, marginBottom: 50 }}
                    item
                    xs={12}
                    md={6}
                    sm={6}
                    lg={4}
                  >
                    <PropertyCard {...property} refetch={refetch} />
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </Container>
      </div>
    </DashboardLayout>
  );
};

export default withAuth(FavoritesPage);
