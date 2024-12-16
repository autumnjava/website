import { mergeProps } from 'solid-js';

const defaultProps: SvgIconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'currentColor',
  'aria-hidden': true,
};

export type SvgIconProps = {
  class?: string;
  extraClass?: string;
  color?: string;
  children?: any;
  fill?: string;
  stroke?: string;
  height?: string;
  width?: string;
  version?: string;
  viewBox?: string;
  x?: string;
  xmlns?: string;
  y?: string;
  disabled?: boolean;
  'aria-hidden'?: boolean;
};

// font awesome
export default function About(componentProps: SvgIconProps) {
  const props = mergeProps(defaultProps, componentProps);

  return <svg {...props}>{componentProps.children}</svg>;
}
