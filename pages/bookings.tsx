import DashboardLayout from "components/ui/Layout/DashboardLayout/DashboardLayout";
import withAuth from "lib/hocs/withAuth";

const BookingsPage = () => {
  return <DashboardLayout title="Bookings">Bookings</DashboardLayout>;
};

export default withAuth(BookingsPage);
