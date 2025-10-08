import { useState } from 'react'
import Dropdown from './Dropdown';


export default function InputSearch() {
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    const handleSelect = (option) => {
      setSelectedOption(option);
    };
  return (
    <div>
       <div className='div-filter'>
          <input className='input-search' type="text" />
          <input type="button" value="Buscar" />
        </div>
        <Dropdown
            label={selectedOption || 'Select an option'}
            options={dropdownOptions}
            onSelect={handleSelect}
        >
            {selectedOption && <p>Selected: {selectedOption}</p>}
        </Dropdown>
          
    </div>
    
  )
}
