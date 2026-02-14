function Rightpart(props) {
  return (
    <div className="flex gap-6">
      {props.user.map((el) => {
        return (
          <div
            key={el.id}
            className="min-w-[320px] h-140 rounded-3xl mt-7 relative overflow-hidden shrink-0"
          >
            {/* Background Image */}
            <img
              src={el.image}
              alt="bg"
              className="w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-black shadow">
                {el.mark}
              </div>

              <div className="max-w-xs">
                <p className="text-white leading-relaxed drop-shadow-md ">
                  {el.description}
                </p>

                <button className="mt-4 bg-amber-400 rounded-full px-6 py-3 font-semibold text-black hover:bg-amber-500 transition">
                  {el.buttonText}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rightpart;
