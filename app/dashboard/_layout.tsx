import { NativeTabs } from "expo-router/build/native-tabs";

const DashboardLayout = () => {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Icon md="home" sf="house.fill" />
        <NativeTabs.Trigger.Label children="Inicio" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon md="settings" sf="house.fill" />
        <NativeTabs.Trigger.Label children="Ajustes" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default DashboardLayout;
