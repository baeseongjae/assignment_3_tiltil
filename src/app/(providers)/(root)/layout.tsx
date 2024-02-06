import { AuthProvider } from "@/app/(providers)/_contexts/auth.context";
import Header from "./_components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div id="root" className="max-w-screen-2xl mx-auto">
        <Header />
        {children}
      </div>
    </AuthProvider>
  );
}

export default RootLayout;
