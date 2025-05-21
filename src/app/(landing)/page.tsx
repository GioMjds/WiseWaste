import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-green-medium to-base-green-dark">
        <div className="text-center space-y-8 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-text-on-dark">
            Smart Waste Management
            <br />
            <span className="text-base-sage-light">For Modern Communities</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-on-dark max-w-3xl mx-auto">
            Revolutionizing neighborhood recycling through AI-powered solutions
            and community engagement
          </p>
          <Link
            href="/register"
            className="bg-button-primary-bg text-button-primary-text px-8 py-4 rounded-full text-lg font-semibold hover:bg-bg-button-hover transition-all"
          >
            Join Smart Community
          </Link>
        </div>
      </section>
    </main>
  );
}
