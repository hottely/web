import { Avatar, createStyles, makeStyles } from "@material-ui/core";
import DashboardLayout from "components/ui/Layout/DashboardLayout/DashboardLayout";
import { useMeQuery } from "generated/graphql";
import withAuth from "lib/hocs/withAuth";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageHeader: {
      height: "50px",
      display: "flex",
      alignItems: "center",
    },
    pageTitle: {
      color: "black",
      fontWeight: 500,
      fontSize: 24,
    },
    page: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    avatar: { width: 45, height: 45 },
  })
);

const DashboardPage = () => {
  const { data } = useMeQuery({ ssr: false });

  const classes = useStyles({});

  if (!data) {
    return (
      <DashboardLayout>
        <div>loading...</div>
      </DashboardLayout>
    );
  }

  const { name, avatarUrl } = data.me;

  return (
    <DashboardLayout>
      <div className={classes.page} style={{ padding: 30, paddingTop: 0 }}>
        <div
          className={classes.pageHeader}
          style={{ marginTop: 40, marginBottom: 20 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {avatarUrl && (
              <Avatar
                style={{ marginRight: 20, height: 55, width: 55 }}
                src={avatarUrl}
              />
            )}
            {!avatarUrl && (
              <Avatar
                style={{
                  backgroundColor: "red",
                  marginRight: 20,
                  height: 55,
                  width: 55,
                }}
              >
                {name.split(" ")[0][0]}
              </Avatar>
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className={classes.pageTitle}>{name.split(" ")[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withAuth(DashboardPage);
