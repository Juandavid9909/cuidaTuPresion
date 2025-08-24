import Navbar from "@/components/shared/navbar/navbar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}
