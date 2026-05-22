const ReviewCard = ({
  name,
  image,
}) => {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-md
        p-8
        min-h-[260px]
      "
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"></div>

      {/* Top */}
      <div className="relative z-10 flex items-center gap-4">

        <img
          src={image}
          alt="user"
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-2xl font-medium">
            {name}
          </h3>

          <p className="text-yellow-400 text-sm mt-1">
            ★★★★★
          </p>
        </div>

      </div>

      {/* Text */}
      <p className="relative z-10 text-gray-300 mt-8 leading-relaxed">
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>

    </div>
  );
};

export default ReviewCard;