import BookingList from "components/ui/BookingList";
import DashboardLayout from "components/ui/Layout/DashboardLayout/DashboardLayout";
import { useGetMyBookingsQuery } from "generated/graphql";
import withAuth from "lib/hocs/withAuth";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const BookingsPage = () => {
  const { data } = useGetMyBookingsQuery({
    fetchPolicy: "network-only",
  });

  const bookings = data?.getMyBookings || [];

  return (
    <DashboardLayout>
      <h1>My bookings</h1>
      <BookingList bookings={bookings} />
    </DashboardLayout>
  );
};

export default withAuth(BookingsPage);
