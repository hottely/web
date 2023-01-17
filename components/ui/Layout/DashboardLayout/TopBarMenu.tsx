import { useMeQuery } from "generated/graphql";
import Router from "next/router";
import styled from "styled-components";
import HeaderTabs from "./DashboardHeader/HeaderTabs";
import ProfilePopup from "./ProfilePopup/ProfilePopup";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: white;
`;

const LogoText = styled.div`
  font-size: 20px;
  cursor: pointer;
  background: white;
  margin-right: 40px;
  font-weight: bold;
`;

const TopBarMenu = (props) => {
  let { classes, fixed } = props;

  const tabs = [
    {
      text: "Dashboard",
      path: "/dashboard",
      action: () => {
        Router.push("/dashboard");
      },
    },
    {
      text: "Properties",
      path: "/properties",
      action: () => {
        Router.push("/properties");
      },
    },
    {
      text: "Bookings",
      path: "/bookings",
      action: () => {
        Router.push("/bookings");
      },
    },
    {
      text: "Favorites",
      path: "/favorites",
      action: () => {
        Router.push("/favorites");
      },
    },
    {
      text: "My listings",
      path: "/landlord/listings",
      action: () => {
        Router.push("/landlord/listings");
      },
    },
  ];

  const { data } = useMeQuery({ ssr: false });
  const { id, email, name, avatarUrl } = data.me;

  const find = tabs.find((tab) => tab.path == location.pathname);
  const currentTab = find ? find.text : null;

  if (!data) {
    return <div>loaading..</div>;
  }

  return (
    <Nav>
      <LogoText
        onClick={() => {
          Router.push("/dashboard");
        }}
      >
        Hottely
      </LogoText>

      <HeaderTabs disabled={false} currentTab={currentTab} tabs={tabs} />

      <ProfilePopup name={name} avatar={avatarUrl} />
    </Nav>
  );
};

export default TopBarMenu;
