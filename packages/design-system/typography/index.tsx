import {
  H1,
  H2,
  H3,
  H4,
  H5,
  P1,
  P2,
  P3,
  Caption,
  Label1,
  Label2,
  Label3,
} from "./styled";
import { Props } from "./types";

export const Typography = ({
  specs,
  color,
  children,
  className,
  typographyRef,
}: Props) => {
  switch (specs.variant) {
    case "h1":
      return (
        <H1
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </H1>
      );
    case "h2":
      return (
        <H2
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </H2>
      );
    case "h3":
      return (
        <H3
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </H3>
      );
    case "h4":
      return (
        <H4
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </H4>
      );
    case "h5":
      return (
        <H5
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </H5>
      );
    case "p1":
      return (
        <P1
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </P1>
      );
    case "p2":
      return (
        <P2
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </P2>
      );
    case "p3":
      return (
        <P3
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </P3>
      );
    case "caption":
      return (
        <Caption color={color} ref={typographyRef}>
          {children}
        </Caption>
      );
    case "label1":
      return (
        <Label1
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </Label1>
      );
    case "label2":
      return (
        <Label2
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </Label2>
      );
    case "label3":
    default:
      return (
        <Label3
          type={specs.type}
          color={color}
          className={className}
          ref={typographyRef}
        >
          {children}
        </Label3>
      );
  }
};
