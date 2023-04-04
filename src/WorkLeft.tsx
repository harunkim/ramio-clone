const WorkLeft = () => {
  return (
    <div className=" grid grid-cols-2">
      <div
        className=" w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(https://mixdesign.club/themeforest/ramio/img/gallery/portfolio-item-1_900x1200.jpg)`,
        }}
      >
        <div className=" bg-gray-100 opacity-0 transition-opacity hover:opacity-100 w-full h-full relative">
          <div className=" absolute bottom-4 right-8">
            <p className=" font-bold">FASHION</p>
            <p className=" italic">Just stylish</p>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(https://mixdesign.club/themeforest/ramio/img/gallery/portfolio-item-2_900x1200.jpg)`,
        }}
      >
        <div className=" bg-zinc-800 opacity-0 transition-opacity hover:opacity-100 w-full h-full relative text-white">
          <div className=" absolute bottom-4 right-8">
            <p className=" font-bold">FASHION</p>
            <p className=" italic">Just stylish</p>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(https://mixdesign.club/themeforest/ramio/img/gallery/portfolio-item-3_900x1200.jpg)`,
        }}
      >
        <div className=" bg-zinc-800 opacity-0 transition-opacity hover:opacity-100 w-full h-full relative text-white">
          <div className=" absolute bottom-4 right-8">
            <p className=" font-bold">FASHION</p>
            <p className=" italic">Just stylish</p>
          </div>
        </div>
      </div>
      <div
        className=" w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(https://mixdesign.club/themeforest/ramio/img/gallery/portfolio-item-4_900x1200.jpg)`,
        }}
      >
        <div className=" bg-gray-100 opacity-0 transition-opacity hover:opacity-100 w-full h-full relative">
          <div className=" absolute bottom-4 right-8">
            <p className=" font-bold">FASHION</p>
            <p className=" italic">Just stylish</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkLeft;
