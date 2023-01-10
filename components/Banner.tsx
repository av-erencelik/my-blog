const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Yazılımcı Avukat</h1>
        <h2 className="mt-5 md:mt-0">
          <span className="underline decoration-4 decoration-cyan-300">Web Geliştirme </span>
          Hakkındaki Deneyimlerimi Aktardığım Kişisel Blog Sayfama Hoşgeldiniz!
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Hukuk Fakültesi mezunu bir teknoloji tutkununun Frontend Developer olma yolculuğu | Web Geliştirme ilgili herşey
        & Daha fazlası!
      </p>
    </div>
  );
};

export default Banner;
