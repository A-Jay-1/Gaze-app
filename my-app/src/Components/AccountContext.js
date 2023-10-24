import React from "react";
import { useState, useEffect } from "react";
import { axiosPrivate } from "../axiosCustom";
import { Outlet } from "react-router-dom";

const AccountContext = () => {
    const [accountDetails, setAccountDetails] = useState([]);
    useEffect(() => {
        const loadAccountInfo = async () => {
            const response = await axiosPrivate.get(`/api/accountsList`);
            const accountDetails = response.data;
            setAccountDetails(accountDetails);
        };
        loadAccountInfo();
    }, []);
    return <Outlet context={{ accountDetails }} />;
};

export default AccountContext;
