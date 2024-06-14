import InfoBar from "@/components/infobar";
import BillingSettings from "@/components/settings/billing-setting";
import ChangePassword from "@/components/settings/change-password";
import DarkModeToggle from "@/components/settings/dark-mode";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="pr-4 flex-1 flex-col flex">
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSettings />
        <DarkModeToggle />
        <ChangePassword />
      </div>
    </div>
  );
};

export default Page;
