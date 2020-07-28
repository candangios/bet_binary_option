import React,{ memo } from "react";
import { Box, Image } from "rebass";
import style from './style.css'

export default memo(()=>{

    function mail() {
        alert('pigfarmteam@yandex.com');
      }
    function ownerSetting() {
        // if (_store.address.toLowerCase() === '0xbe36e1dc37add0878a8f3fd6f2a0567824e1f4fe') {
        //   _store.isShowSettingModal = true;
        // }
    }

    return(
        <Box className = {style.footer}>
            <a className = {style.icon}>
                <Image width = {15} height = {15} src = {require("./imgs/telegram-logo.svg")}></Image>
            </a>
            <a className = {style.icon}>
                <Image width = {15} height = {15} src = {require("./imgs/twitter-logo.svg")}></Image>
            </a>
            <a className = {style.icon}>
                <Image width = {15} height = {15} src = {require("./imgs/github-logo.svg")}></Image>
            </a>
            <a href="https://scan.tomochain.com/address/0xbf1dcb735e512b731abd3404c15df6431bd03d42" class={style.icon}>
                <Image width = {15} height = {15} src = {require("./imgs/github-logo.svg")}></Image>
            </a>
        </Box>
        
    )

    

})

