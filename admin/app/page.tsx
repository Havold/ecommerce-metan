import AppAreaChar from "@/components/AppAreaChar";
import AppBarChar from "@/components/AppBarChar";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-2">
        <h1 className="text-sm mb-8">Total Revenue</h1>
        <AppBarChar />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-2">
        <h1 className="text-sm mb-8">Total Visitors</h1>
        <AppAreaChar />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
    </div>
  );
}
