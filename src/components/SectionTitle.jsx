const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-20">

      <div className="w-14 h-[2px] bg-green-400"></div>

      <h2 className="text-4xl font-semibold">
        {title}
      </h2>

      <div className="w-14 h-[2px] bg-green-400"></div>

    </div>
  );
};

export default SectionTitle;