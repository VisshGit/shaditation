export default function Home() {
  return (
    <div className="flex flex-col items-center py-20 gap-10">
      <h1 className="text-4xl font-bold">Scroll Test Start</h1>
      <div className="h-[200vh] w-32 bg-amber-500/20 flex items-center justify-center">
        Dummy Long Section (Scroll check)
      </div>
      <h2 className="text-2xl">Scroll Test End</h2>
    </div>
  );
}
