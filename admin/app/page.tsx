import AppBarChar from "@/components/AppBarChar";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-2">
        <h1 className="text-sm mb-4">Total Revenue</h1>
        <AppBarChar />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-2">
        Test
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
    </div>
  );
}
