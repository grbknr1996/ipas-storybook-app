import React from "react";
interface FilterBarProps {
    filterOptions: {
        label: string;
        value: string;
        color: string;
    }[];
    selectedFilter: string;
    onFilterChange: (filter: string) => void;
}
declare const FilterBar: React.FC<FilterBarProps>;
export default FilterBar;
