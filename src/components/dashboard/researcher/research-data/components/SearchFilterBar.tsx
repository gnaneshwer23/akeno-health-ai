
import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from 'lucide-react';

interface SearchFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search datasets, biomarkers, studies..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <Filter className="h-4 w-4 mr-2" />
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Data Types</SelectItem>
          <SelectItem value="genomics">Genomics</SelectItem>
          <SelectItem value="imaging">Medical Imaging</SelectItem>
          <SelectItem value="longitudinal">Longitudinal</SelectItem>
          <SelectItem value="drugDiscovery">Drug Discovery</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchFilterBar;
