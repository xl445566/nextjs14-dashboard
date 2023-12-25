import { fetchRevenue } from '@/app/lib/data';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: '커스터머',
};

export default async function Customers() {
  return (<div>
    <p>Customers Page</p>;
    </div>
  );
}
