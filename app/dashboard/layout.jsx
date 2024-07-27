import { SideBar } from "./_components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <main className="h-full">
      <div className="flex h-full gap-x-3">
        <SideBar />
        <div className="h-full flex-1">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
