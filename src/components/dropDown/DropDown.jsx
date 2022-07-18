import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import styles from "./style.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import {logOut} from "../../redux/common/auth/thunk";
import {Link} from "react-router-dom";
import {HOME_ROUTE, USER_ACCOUNT_ROUTE} from "../../constants/routePath";
import { selectUser } from '../../redux/common/auth/selectors'


export default function BasicMenu() {
    const userData = useSelector(selectUser);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(false);
    const open = !!anchorEl;
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        dispatch(logOut());
        setAnchorEl(null);
    }



    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <p className={styles.text}>{userData.user.userBasicInfo.username}</p>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link to={USER_ACCOUNT_ROUTE}><MenuItem onClick={handleClose}>My account</MenuItem></Link>
                <Link to={HOME_ROUTE}><MenuItem onClick={handleLogOut}>Logout</MenuItem></Link>
            </Menu>
        </>
    );
}