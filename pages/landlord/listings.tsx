import HottelyButton from "components/ui/HottelyButton/HottelyButton";
import DashboardLayout from "components/ui/Layout/DashboardLayout/DashboardLayout";
import PropertyList from "components/ui/PropertyList";
import { useGetListingsQuery } from "generated/graphql";
import withAuth from "lib/hocs/withAuth";
import Router from "next/router";

const ListingsPage = () => {
  const { data } = useGetListingsQuery();

  const properties = data?.getListings || [];

  return (
    <DashboardLayout>
      <div>
        <h1>My listings</h1>

        <PropertyList properties={properties} />
        <HottelyButton
          type="submit"
          color="primary"
          onClick={() => {
            Router.push("/landlord/create-listing");
          }}
        >
          Create listing
        </HottelyButton>
      </div>
    </DashboardLayout>
  );
};

export default withAuth(ListingsPage);
