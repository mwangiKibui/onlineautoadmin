import React from 'react';
import {
  CHeader,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink
} from '@coreui/react';

const TheHeader = () => {


  return (
    <CHeader withSubheader>
      

      <CHeaderNav className="d-md-down-none ml-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/auth/logout">Logout</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>


    </CHeader>
  )
}

export default TheHeader
