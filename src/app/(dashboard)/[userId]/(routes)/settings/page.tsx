interface SettingsPageProps {
  params: {
    userId: string;
  };
}

const SettingsPage: React.FC<SettingsPageProps> = ({ params }) => {
  return (
    <div>
      <h1>Settings for User: {params.userId}</h1>
    </div>
  );
};
export default SettingsPage;
