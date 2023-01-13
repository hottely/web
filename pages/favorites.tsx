import DashboardLayout from "components/ui/Layout/DashboardLayout/DashboardLayout";
import withAuth from "lib/hocs/withAuth";

const FavoritesPage = () => {
  return <DashboardLayout title="Favorites">Favorites</DashboardLayout>;
};

export default withAuth(FavoritesPage);
