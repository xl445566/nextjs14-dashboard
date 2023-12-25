import DashboardSkeleton from '@/app/ui/skeletons';
 
// Tip: 로딩을 만들면 자동으로 적용
// Tip: (overview)해당 라우트에만 작용 (라우트 그룹)
export default async function Loading() { 
  // return <DashboardSkeleton />;
  return <div>loading...</div>;
}