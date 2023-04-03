const HeroImg = () => {
  return (
    <div
      className=" bg-center bg-cover relative"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/6626999/pexels-photo-6626999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="flex flex-col justify-between items-end absolute bottom-12 right-20 text-white">
        <p className="font-black text-7xl">48</p>
        <p>Days to Launch</p>
      </div>
    </div>
  );
};

export default HeroImg;
