import { useSearchParams } from "react-router-dom";
import Button from "./Button";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get(filterField) || options[0].value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };
  return (
    <div className="
    flex gap-2 p-2
    bg-white/90 backdrop-blur-sm
    rounded-lg
    shadow-md
    border border-gray-200
    transition-all duration-200 ease-in-out
  ">
  {options.map((option) => (
    <Button
      variant={option.value === activeFilter ? "active" : "secondary"}
      key={option.value}
      onClick={() => handleClick(option.value)}
    >
      {option.label}
    </Button>
  ))}
</div>

  );
};

export default Filter;
