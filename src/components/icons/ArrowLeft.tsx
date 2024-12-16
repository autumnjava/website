import { mergeProps } from 'solid-js';
import SvgIcon, { SvgIconProps } from './SvgIcon';

const defaultProps: SvgIconProps = {
  viewBox: '0 0 20 20',
  class:
    'mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2',
};

export default function ArrowLeftIcon(componentProps: SvgIconProps) {
  const props = mergeProps(defaultProps, componentProps);

  return (
    <SvgIcon {...props}>
      <path
        fill-rule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clip-rule="evenodd"
      ></path>
    </SvgIcon>
  );
}
