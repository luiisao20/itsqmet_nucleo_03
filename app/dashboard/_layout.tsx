import { NativeTabs } from "expo-router/build/native-tabs";

const DashboardLayout = () => {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Icon md="home" sf="house.fill" />
        <NativeTabs.Trigger.Label children="Inicio" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="bookings">
        <NativeTabs.Trigger.Icon md="book" sf="house.fill" />
        <NativeTabs.Trigger.Label children="Reservaciones" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default DashboardLayout;
