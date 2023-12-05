import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full">
      <Header />
      <main className="mt-10">{children}</main>
      <Footer />
    </main>
  );
}
