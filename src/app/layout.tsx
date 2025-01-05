import "./globals.css";
import { MyThemeProvider } from "@/components/context/theme";
import Headers from "@/components/utils/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <MyThemeProvider>
          <Headers />
          {children}
        </MyThemeProvider>
      </body>
    </html>
  );
}
