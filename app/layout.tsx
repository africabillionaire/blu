import "./globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { ToastProvider, Toaster } from "@/components/ui/toast";

export const metadata = {
  title: "Citi Adolph",
  description: "Digital Transformation Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
      <body className="bg-white text-black">
        <Nav />
        <ToastProvider>
          <main className="pb-20">{children}</main>
          <Toaster />
        </ToastProvider>
        <Footer />
      </body>
    </html>
  )
}