import { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  InputArea,
  InputContainer,
  SuggestionOption,
  SuggestionsContainer,
  SuggestionsList,
} from "./styled";
import { TagsInputProps } from "./types";
import { Typography } from "../typography";
import { Tag } from "../tag";

export const TagsInput = ({
  label,
  description,
  placeholder = "",
  onTagsUpdate = () => {},
  onNewQueryTerm = () => {},
  suggestions,
  defaultTags = [],
}: TagsInputProps) => {
  const inputAreaRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<string[]>(defaultTags);
  const addTag = useCallback(
    (tag: string) => {
      const newTags = [...tags, tag];
      onTagsUpdate(newTags);
      setTags(newTags);
      if (inputAreaRef.current) {
        inputAreaRef.current.innerText = "";
      }
    },
    [inputAreaRef, tags]
  );
  const removeTag = useCallback(
    (index: number) => {
      const newTags = [...tags];
      newTags.splice(index, 1);
      setTags(newTags);
      onTagsUpdate(newTags);
    },
    [tags, onTagsUpdate, setTags]
  );
  useEffect(() => {
    if (inputAreaRef.current) {
      inputAreaRef.current.focus();
    }
  }, [inputAreaRef]);
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const { key } = event;
      if (key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        if (inputAreaRef?.current?.innerText) {
          addTag(inputAreaRef.current.innerText);
        }
      } else {
        if (inputAreaRef?.current?.innerText) {
          onNewQueryTerm(inputAreaRef?.current?.innerText);
        }
      }
    },
    [onNewQueryTerm, tags]
  );
  return (
    <Container>
      {label && (
        <Typography specs={{ type: "bold", variant: "p2" }} color="primary01">
          {label}
        </Typography>
      )}
      <InputContainer>
        {tags.map((tag, index) => (
          <Tag
            key={tag}
            label={tag}
            backgroundColor="bg01"
            textColor="primary01"
            size="small"
            borderColor="primary01"
            rightIcon="remove"
            rightIconCallback={() => removeTag(index)}
          />
        ))}
        <InputArea
          ref={inputAreaRef}
          contentEditable
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
        />
      </InputContainer>
      {!!suggestions.length && (
        <SuggestionsContainer>
          <SuggestionsList>
            {suggestions.map((suggestion) => (
              <SuggestionOption
                key={suggestion}
                onClick={() => addTag(suggestion)}
              >
                <Typography
                  specs={{ type: "regular", variant: "p2" }}
                  color="primary04"
                >
                  {suggestion}
                </Typography>
              </SuggestionOption>
            ))}
          </SuggestionsList>
        </SuggestionsContainer>
      )}
      {description && (
        <Typography
          specs={{ type: "regular", variant: "p2" }}
          color="primary04"
        >
          {description}
        </Typography>
      )}
    </Container>
  );
};
