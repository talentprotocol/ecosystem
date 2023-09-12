export interface TagsInputProps {
  label?: string;
  description?: string;
  placeholder?: string;
  onTagsUpdate?: (tags: string[]) => void;
  suggestions: string[];
  onNewQueryTerm: (query: string) => void;
  defaultTags?: string[];
}

export interface StyledInputAreaProps {
  placeholder: string;
}
