export interface TagsInputProps {
  label?: string;
  description?: string;
  placeholder?: string;
  onTagAdded?: (tag: string) => void;
  suggestions: string[];
  onNewQueryTerm: (query: string) => void;
  defaultTags?: string[];
}

export interface StyledInputAreaProps {
  placeholder: string;
}
