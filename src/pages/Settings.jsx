import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Logo from "../ui/Logo";
function Settings() {
  return (
    <div className="p-4 sm:p-8 flex flex-col gap-8">
      <Logo />
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
