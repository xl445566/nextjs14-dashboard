import '@/app/ui/global.css'; // Tip: @는 프로젝트의 root를 의미
import { inter } from '@/app/ui/fonts';

// Tip: layout파일을 이용해 레이아웃을 공유할 수 있다.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
