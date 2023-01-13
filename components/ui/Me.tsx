import { useQuery } from "@apollo/client";
import QueryResult from "components/containers/QueryResult";
import { MeDocument } from "generated/graphql";

const Me = () => {
  const { ...queryResult } = useQuery(MeDocument);

  return (
    <>
      <QueryResult {...queryResult}>
        {({
          data: {
            me: { email, id },
          },
        }) => (
          <div>
            <p>Id: {id}</p>
            <p>email: {email}</p>
          </div>
        )}
      </QueryResult>
    </>
  );
};

export default Me;
