export default function HeroSection2(props) {
  const {
    backgroundImg = "https://source.unsplash.com/random/1920x900/?bike road",
    title = "Welcome to our Bike Showroom",
    subTitle = "Explore our widerange of bikes for every type of rider",
    button1 = "Contact Us",
    button2 = "View Collection",
  } = props;

  return (
    <header className="relative mb-12">
      <img
        src={backgroundImg}
        alt="hero"
        className="w-full min-h-[calc(100dvh_-_96px)] max-h-[calc(100dvh_-_96px)] object-cover object-center rounded-md"
      />
      <div className="absolute top-0 w-full h-full">
        <div className="flex flex-col items-center justify-center gap-24 container my-auto h-full">
          <h1 className="text-7xl font-bold text-white drop-shadow-lg">
            {title}
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 bg-white bg-opacity-40 backdrop-blur-sm  rounded-lg px-12 py-8">
            <h6 className="text-xl text-white drop-shadow-md font-semibold">
              {subTitle}
            </h6>
            <div className="flex items-center justify-end gap-4">
              <button className="border border-orange-700 text-white rounded-2xl bg-orange-700 px-4 text-sm font-medium py-1">
                {button1}
              </button>
              <button className="border border-orange-700 px-4 rounded-2xl text-orange-700 text-sm font-medium py-1">
                {button2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}