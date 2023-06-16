import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface IMainLayout {
  children: ReactNode;
}
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <Header />

        <main className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10 min-h-full flex-1">{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
