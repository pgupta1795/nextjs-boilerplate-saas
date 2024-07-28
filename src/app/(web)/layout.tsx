import SquareGridFull from '@/components/landing-pages/background/square-grid-full';
import Footer from '@/components/landing-pages/footer/footer-template1';
import Header from '@/components/landing-pages/header/header-template1';

type Props = {
  children: React.ReactNode;
};

export default function WebLayout({ children }: Props) {
  return (
    <SquareGridFull>
      <Header />
      {children}
      <Footer />
    </SquareGridFull>
  );
}
