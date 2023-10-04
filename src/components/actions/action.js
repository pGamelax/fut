export default function Action({ name }) {
  return (
    <div className="w-96 h-24 border border-black flex flex-row gap-4">
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/61333827?v=4"
          className="w-14 h-14 rounded-full"
        />
        <p className="border border-black w-14 rounded-full text-center">
          1
        </p>
      </div>
      <div className="w-full flex flex-col ">
        <span className=" h-12 w-full items-center justify-center flex">
          1000
        </span>
        <div className="flex flex-row">
          <button className="bg-orange-600 w-3/4 h-12 flex flex-row">
            <span className="font-bold text-white w-1/3 px-2">Buy</span>
            <span className=" text-center text-black">
              R$ 1000 <br></br>quintilhoes
            </span>
          </button>
          <div className="flex items-center justify-center w-1/4 ">10s</div>
        </div>
      </div>
    </div>
  );
}
