import { useState } from "react";
interface ChildProps {
  options: string[];
  onData: (data: string) => void;
}

const DynamicDropdown = ({ options, onData }: ChildProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  // Call the callback function to pass data to the parent

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onData(selectedOption);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DynamicDropdown;
