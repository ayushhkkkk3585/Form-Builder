import { SideBar } from "./_components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <main className="h-full">
      <div className=" h-full">
        <SideBar />
        <div className="flex h-full gap-x-3">
          <div className="h-full flex-1">
            {/* <Navbar /> */}
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
