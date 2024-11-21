
const ImageGrid = () => {
  return (
    <div className="w-11/12 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="h-full rounded-3xl col-span-2 row-span-2">
      <img
          src="https://i.ibb.co.com/94715yd/4.png"
          alt=""
          className="w-full object-cover border border-gray-900 rounded-3xl"
        />
      </div>
      <div className="col-span-2">
      <img
          src="https://i.ibb.co.com/Ytn4CDv/3.jpg"
          alt=""
          className="w-full object-cover border border-gray-900 rounded-3xl"
        />
      </div>
      <div>
        <img
          src="https://i.ibb.co.com/CKDjCmD/2.jpg"
          alt=""
          className="w-full object-cover border border-gray-900 rounded-3xl"
        />
      </div>
      <div>
        <img
          src="https://i.ibb.co.com/gjQWRc2/1.jpg"
          alt=""
          className="w-full object-cover border border-gray-900 rounded-3xl"
        />
      </div>

    </div>
  );
};

export default ImageGrid;
