export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <div className="max-w-5xl mx-auto space-y-4">
      <div className="input-group" style={{ margin: "1rem 0" }}>
        <label className="input-label">Input Label</label>
        <input 
          type="text" 
          placeholder="Enter text..." 
          className="input-field"
        />
      </div>

      <img 
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop" 
        alt="Placeholder image" 
        style={{ width: "100%", height: "auto", maxWidth: "100%", objectFit: "cover" }}
        className=""
      />
      </div>
    </main>
  );
}