import Layout from "components/ui/Layout/Layout";
import PropertyInfo from "components/ui/PropertyInfo/PropertyInfo";
import { useGetPropertyQuery } from "generated/graphql";
import { useRouter } from "next/router";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error, refetch } = useGetPropertyQuery({
    variables: { propertyId: id as string },
  });

  const property = data?.getProperty;

  if (!property) {
    return (
      <Layout>
        <div>Property not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PropertyInfo property={property} refetch={refetch} />
    </Layout>
  );
};

export default PropertyPage;
