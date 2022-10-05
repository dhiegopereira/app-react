import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`

export const Item = styled(Link)`
    text-decoration: none;
    margin: 5px;
`