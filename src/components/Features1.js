export default function Features1() {
  return (
    <section className="container py-24 grid grid-cols-2 items-center justify-between">
      <img
        src="https://source.unsplash.com/random/500x300/?sports bikes"
        alt="features"
        className="rounded-lg object-cover object-center"
      />
      <div className="flex flex-col gap-8">
        <p className="text-base">Ride in Style and Comfort</p>
        <h2 className="text-4xl font-semibold">Premium Bikes</h2>
        <p className="text-base">
          Explore our collection of premium bites that offer both style and
          cockpit for an exceptional writing experience.
        </p>
      </div>
    </section>
  );
}
