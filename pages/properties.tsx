import Grid from "@material-ui/core/Grid";
import DashboardLayout from "components/ui/Layout/DashboardLayout/DashboardLayout";
import LoadingIndicator from "components/ui/LoadingIndicator";
import PropertyCard from "components/ui/PropertyCard/PropertyCard";
import { useGetPropertiesQuery } from "generated/graphql";
import { lazy, useState } from "react";
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

const PropertiesPage = () => {
  const { data, loading, error } = useGetPropertiesQuery();

  const properties = data?.getProperties || [];
  const fetching = loading || error;

  if (fetching) {
    return (
      <DashboardLayout>
        <div style={{ display: "flex" }}>
          <Container>
            <div>
              <LoadingIndicator />
            </div>
          </Container>
        </div>
      </DashboardLayout>
    );
  }

  console.log(properties);

  return (
    <DashboardLayout>
      <div style={{ display: "flex" }}>
        <Container>
          {properties.length === 0 && !fetching && (
            <div>
              <h2>No properties found</h2>
              <div style={{ height: "calc(100vh - 200px)" }} />
            </div>
          )}

          {properties.length !== 0 && !fetching && (
            <div>
              <TitleContainer>
                <h2>All properties</h2>
              </TitleContainer>
              <Grid container spacing={3}>
                {properties.map((property, index) => (
                  <Grid
                    key={index}
                    style={{ marginTop: 10, marginBottom: 50 }}
                    item
                    xs={12}
                    md={6}
                    sm={6}
                    lg={4}
                  >
                    <PropertyCard {...property} />
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

export default PropertiesPage;
