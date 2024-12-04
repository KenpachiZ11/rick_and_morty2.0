import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import {
    WrapperBlockSt,
    WrapperBlockHeaderSt,
    WrapperBlockMainSt,
    WrapperBlockFooterSt
} from './Layout.style.js';

const Layout = () => {
    return (
        <WrapperBlockSt>
            <WrapperBlockHeaderSt><Header /></WrapperBlockHeaderSt>
            <WrapperBlockMainSt><Outlet /></WrapperBlockMainSt>
            <WrapperBlockFooterSt><Footer /></WrapperBlockFooterSt>
        </WrapperBlockSt>
    )
}

export default Layout;