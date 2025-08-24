import { SettingsForm } from "./components/settings-form";

interface SettingsPageProps {
  params: {
    userId: string;
  };
}

const SettingsPage: React.FC<SettingsPageProps> = ({ params }) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm />
      </div>
    </div>
  );
};
export default SettingsPage;
