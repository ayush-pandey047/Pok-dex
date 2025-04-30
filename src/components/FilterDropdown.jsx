import React from "react";

const type =[
    "All",
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psyschic",
    "Bug",
    "Rock",
    "Ghost",
    "Dark",
    "Dragon",
    "Stell",
    "Fairy"
];

const FilterDropdown = ({selectedType, setSelectedType}) =>{
    return (
        <select 
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="filter-dropdown"
        >
            {type.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
        </select>
    )
}

export default FilterDropdown;