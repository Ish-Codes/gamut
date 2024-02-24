import { useId } from '@reach/auto-id';
import { ComponentProps, forwardRef } from 'react';

import { ButtonBaseElements } from '../ButtonBase/ButtonBase';
import { NewToolTip, ToolTipProps } from '../Tip';
import {
  createButtonComponent,
  IconComponentType,
  iconSizeVariants,
  textButtonVariants,
} from './shared';

const IconButtonBase = createButtonComponent(
  iconSizeVariants,
  textButtonVariants
);

export type IconButtonProps = ComponentProps<typeof IconButtonBase> &
  IconComponentType & {
    tip: string;
    tipProps?: Omit<ToolTipProps, 'info' | 'id'>;
  };

export const IconButton = forwardRef<ButtonBaseElements, IconButtonProps>(
  ({ icon: Icon, tip, tipProps, variant = 'secondary', ...props }, ref) => {
    const tipId = useId() ?? 'icon-button-tip';

    return (
      <NewToolTip info={tip} {...tipProps} id={tipId}>
        <IconButtonBase
          {...props}
          variant={variant}
          ref={ref}
          aria-describedby={tipId}
        >
          <Icon
            width="calc(100% - 14px)"
            height="calc(100% - 14px)"
            aria-hidden
          />
        </IconButtonBase>
      </NewToolTip>
    );
  }
);
