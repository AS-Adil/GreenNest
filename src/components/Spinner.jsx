const Spinner = () => (
  <div className="flex flex-col justify-center items-center py-10 gap-2">
    <div className="w-15 h-15 border-4 border-secondary border-dashed rounded-full animate-spin duration-700"></div>
    <h1 className="font-bold text-3xl text-center text-primary">Loading...</h1>
  </div>
);

export default Spinner;
