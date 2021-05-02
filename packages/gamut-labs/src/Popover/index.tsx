import { BodyPortal, FocusTrap } from '@codecademy/gamut';
import { system } from '@codecademy/gamut-styles';
import { variance } from '@codecademy/variance';
import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowScroll, useWindowSize } from 'react-use';

const getTransform = (
  xAlign: 'left' | 'right',
  yAlign: 'top' | 'bottom',
  inset: boolean
) => {
  const y = yAlign === 'top' ? '-100%' : '0%';
  let x: string;
  if (inset) {
    x = xAlign === 'left' ? '0%' : '-100%';
  } else {
    x = xAlign === 'left' ? '-100%' : '0%';
  }

  return `translate(${x} , ${y})`;
};

const PopoverContainer = styled.div(
  variance.compose(
    system.positioning,
    variance.create({
      transform: {
        property: 'transform',
      },
    })
  )
);

export type PopoverProps = {
  className?: string;
  /**
   * Which vertical edge of the source component to align against.
   */
  alignment?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Align to the inset of the target div */
  inset?: boolean;
  /**
   * Number of pixels to offset the popover vertically from the source component.
   */
  verticalOffset?: number;
  /**
   * Number of pixels to offset the popover horizontally from the source component.
   */
  horizontalOffset?: number;
  /**
   * Toggle the beak of the popover, this is aligned to the X alignment.
   */
  beak?: boolean;
  /**
   * Whether the popover is rendered.
   */
  isOpen: boolean;
  /**
   * Called when the Popover requests to be closed,
   * this could be due to clicking outside of the popover, or by clicking the escape key.
   */
  onRequestClose?: () => void;
  /**
   * The target element around which the popover will be positioned.
   */
  targetRef: React.RefObject<
    Pick<HTMLDivElement, 'getBoundingClientRect' | 'contains'>
  >;
};

export const Popover: React.FC<PopoverProps> = ({
  children,
  className,
  alignment = 'bottom-left',
  verticalOffset = 20,
  horizontalOffset = 0,
  beak,
  inset = true,
  isOpen,
  onRequestClose,
  targetRef,
}) => {
  const [targetRect, setTargetRect] = useState<DOMRect>();
  const [isInViewport, setIsInViewport] = useState(true);
  const { width, height } = useWindowSize();
  const { x, y } = useWindowScroll();
  const [yAlign, xAlign] = alignment.split('-') as [
    'top' | 'bottom',
    'left' | 'right'
  ];

  const getPopoverPosition = useCallback(() => {
    if (!targetRect) return {};
    const positions = {
      top: Math.round(targetRect.top - verticalOffset),
      bottom: Math.round(targetRect.top + targetRect.height + verticalOffset),
    };
    const alignments = {
      right: Math.round(window.scrollX + targetRect.right + horizontalOffset),
      left: Math.round(window.scrollX + targetRect.left - horizontalOffset),
    };

    return {
      top: positions[yAlign],
      left: alignments[xAlign],
    };
  }, [targetRect, verticalOffset, horizontalOffset, xAlign, yAlign]);

  useEffect(() => {
    setTargetRect(targetRef?.current?.getBoundingClientRect());
  }, [targetRef, isOpen, width, height, x, y]);

  useEffect(() => {
    if (targetRect) {
      const inView =
        targetRect.top >= 0 &&
        targetRect.left >= 0 &&
        targetRect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        targetRect.right <=
          (window.innerWidth || document.documentElement.clientWidth);
      setIsInViewport(inView);
    }
    if (!isInViewport) onRequestClose?.();
  }, [targetRect, isInViewport, onRequestClose]);

  const handleClickOutside = useCallback(
    (e) => {
      /**
       * Allows targetRef to be or contain a button that toggles the popover open and closed.
       * Without this check it would toggle closed then back open immediately.
       */
      if (targetRef.current?.contains(e.target as Node)) return;

      onRequestClose?.();
    },
    [onRequestClose, targetRef]
  );

  const popoverRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !targetRef) return null;

  const { top, left } = getPopoverPosition();

  const transform = getTransform(xAlign, yAlign, inset);

  return (
    <BodyPortal>
      <FocusTrap
        allowPageInteraction
        onClickOutside={handleClickOutside}
        onEscapeKey={onRequestClose}
      >
        <PopoverContainer
          className={className}
          ref={popoverRef}
          tabIndex={-1}
          position="fixed"
          transform={transform}
          top={top}
          left={left}
          data-testid="popover-content-container"
        >
          {children}
        </PopoverContainer>
      </FocusTrap>
    </BodyPortal>
  );
};
