import withoutAuth from "lib/hocs/withoutAuth";
import HomepageHeader from "../components/ui/HomepageHeader/HomepageHeader";
import Layout from "../components/ui/Layout/Layout";

const IndexPage = () => {
  return (
    <Layout menuType="relative">
      <HomepageHeader />
    </Layout>
  );
};

export default withoutAuth(IndexPage);
