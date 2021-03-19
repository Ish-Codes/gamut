import { Box } from '@codecademy/gamut';
import { MiniArrowLeftIcon } from '@codecademy/gamut-icons';
import React from 'react';

import { Text } from '../../../experimental/Text';
import { AppHeaderDropdownProps } from '../../AppHeader/AppHeaderElements/AppHeaderDropdown';
import { HeaderLink } from '../../AppHeader/AppHeaderElements/AppHeaderLink';
import { AppHeaderLinkSections } from '../../AppHeader/AppHeaderElements/AppHeaderLinkSections';

export type AppHeaderSubMenuMobileProps = AppHeaderDropdownProps & {
  handleClose: () => void;
};

export const AppHeaderSubMenuMobile: React.FC<AppHeaderSubMenuMobileProps> = ({
  action,
  handleClose,
  item,
}) => {
  return (
    <Box aria-labelledby={`${item.text} menu`}>
      <HeaderLink
        onClick={handleClose}
        type="button"
        variant="interface"
        paddingY={16}
        marginBottom={12}
        width="100%"
      >
        <MiniArrowLeftIcon size={12} aria-hidden />
        <Box fontSize={16} marginLeft={8}>
          Full Menu
        </Box>
      </HeaderLink>
      <Text
        as="h1"
        fontSize={22}
        marginBottom={16}
        fontWeight="title"
        lineHeight="title"
      >
        {item.type === 'profile-dropdown' ? item.userDisplayName : item.text}
      </Text>
      <AppHeaderLinkSections action={action} item={item} />
    </Box>
  );
};
