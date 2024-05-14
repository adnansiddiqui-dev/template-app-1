export default function HeroSection1(props) {
  const {
    backgroundImg = "https://source.unsplash.com/random/1920x900/?bike road",
    title = "Welcome to our Bike Showroom",
    subTitle = "Explore our widerange of bikes for every type of rider",
    button1 = "Contact Us",
    button2 = "View Collection",
  } = props;

  return (
    <header>
      <img
        src={backgroundImg}
        alt="hero"
        className="w-full max-h-[50dvh] object-cover object-center rounded-md"
        loading="lazy"
      />
      <div className="flex md:flex-row flex-col items-center justify-center w-full text-center md:text-left container py-20 md:gap-0 gap-8">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <div className="flex flex-col items-center md:items-start justify-center gap-6">
          <h6 className="text-xl">{subTitle}</h6>
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
    </header>
  );
}