import clsx from 'clsx';
import { mergeProps } from 'solid-js';
import SvgIcon, { SvgIconProps } from './SvgIcon';

const defaultProps: SvgIconProps = {
  viewBox: '0 0 20 20',
};

export default function ArrowUpRightIcon(componentProps: SvgIconProps) {
  const props = mergeProps(defaultProps, componentProps);

  const defaultClass =
    'ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none';

  return (
    <SvgIcon {...props} class={clsx(defaultClass, componentProps.extraClass)}>
      <path
        fill-rule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clip-rule="evenodd"
      ></path>
    </SvgIcon>
  );
}
