import DashboardLayout from "components/ui/Layout/DashboardLayout/DashboardLayout";
import withAuth from "lib/hocs/withAuth";

const ListingsPage = () => {
  return <DashboardLayout title="Listings">Listings</DashboardLayout>;
};

export default withAuth(ListingsPage);
