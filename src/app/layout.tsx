import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata = {
  title: "Mason Le | Portfolio",
  description: "Full-stack Developer — React / Next.js / NestJS",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-white text-slate-900">
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
