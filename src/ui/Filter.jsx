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
    <div >
  {options.map((option) => (
    <Button
      variant={option.value === activeFilter ? "active" : "secondary"}
      key={option.value}
      onClick={() => handleClick(option.value)}
      disabled = {option.value === activeFilter}
    >
      {option.label}
    </Button>
  ))}
</div>

  );
};

export default Filter;
