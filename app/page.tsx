import AppLayout from '@/components/AppLayout';
import Header from '@/components/Header';
import StaffSection from '@/components/StaffSection';
import StaffList from '@/components/StaffList';

export default function Home() {
  return (
    <AppLayout>
      <Header />
      <StaffSection />
      <main className="p-6">
        <StaffList />
      </main>
    </AppLayout>
  );
}