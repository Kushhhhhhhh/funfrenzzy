import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="h-[80vh] flex items-center justify-center">

      <div className="text-center text-gray-200 px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-thin mb-4">
          Modern Luxury Redefined
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
          Elevate your style with timeless designs crafted for the contemporary
          individual.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-black px-8 py-3 text-lg font-medium rounded-full hover:bg-gray-200 transition-colors"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;