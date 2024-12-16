import tmonthImg from "../../assets/img/theMonth.png";

export const TheMonths = () => {
  return (
    <div className="flex justify-between items-center gap-10 mx-auto">
      <img src={tmonthImg} alt="The Month" className="w-full h-auto" />
    </div>
  );
};
