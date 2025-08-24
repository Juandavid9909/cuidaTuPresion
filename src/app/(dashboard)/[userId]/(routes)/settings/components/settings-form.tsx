import { Heading } from "@/components/shared/heading/heading";
import { Separator } from "@/components/shared/separator/separator";

export const SettingsForm = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading description="Administrar datos médicos" title="Ajustes" />
      </div>

      <Separator />
    </>
  );
};
