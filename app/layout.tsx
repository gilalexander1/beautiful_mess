import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Gil Alexander — Portfolio",
  description: "AI + Analytics — one seamless portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Gil Alexander
            </Link>
            <div className="flex gap-5 text-sm">
              <Link href="/projects" className="hover:underline">Projects</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-gray-500">
            © {new Date().getFullYear()} Gil Alexander • AI × Analytics
          </div>
        </footer>
      </body>
    </html>
  );
}
