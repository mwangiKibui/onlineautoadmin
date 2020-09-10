import React from 'react';
import {
  CCreateElement,
  CSidebar,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react';

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {

  return (
    <CSidebar>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
