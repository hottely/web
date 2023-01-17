import DashboardLayout from "components/ui/Layout/DashboardLayout/DashboardLayout";
import PropertyUploader from "components/ui/PropertyUploader/PropertyUploader";
import withAuth from "lib/hocs/withAuth";

const amenities = [
  "air conditioning",
  "bar",
  "bike storage",
  "cinema",
  "concierge",
  "electricity included",
  "gas included",
  "internet",
  "outside area",
  "parking",
];

const CreateListingPage = () => {
  return (
    <DashboardLayout>
      <PropertyUploader amenities={amenities} />
    </DashboardLayout>
  );
};

export default withAuth(CreateListingPage);
