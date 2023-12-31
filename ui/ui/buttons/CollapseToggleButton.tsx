import styled from 'styled-components'
import { ComponentProps, Ref, forwardRef } from 'react'

import { IconButton } from './IconButton'
import { defaultTransitionCSS } from '../animations/transitions'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'

type CollapseToggleButtonProps = Omit<
  ComponentProps<typeof IconButton>,
  'icon' | 'title'
> & {
  isOpen: boolean
}

const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  svg {
    ${defaultTransitionCSS};
    transform: rotateZ(${({ isOpen }) => (isOpen ? '-180deg' : '0deg')});
  }
`

export const CollapseToggleButton = forwardRef(
  function CollapsableToggleIconButton(
    { isOpen, ...props }: CollapseToggleButtonProps,
    ref: Ref<HTMLButtonElement> | null,
  ) {
    return (
      <IconButton
        ref={ref}
        {...props}
        title={isOpen ? 'Collapse' : 'Expand'}
        type="button"
        icon={
          <IconWrapper isOpen={isOpen}>
            <ChevronDownIcon />
          </IconWrapper>
        }
      />
    )
  },
)
