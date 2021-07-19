import React from 'react'
import './index.less'
import headerlog from '../Img/headerlog.png'

export default function Header(props: any) {
    return (
        <div className='header_wrapper'>

            <div className='header_left'>
                <div className='header_logo'>
                   <img src={headerlog} className='header_Img' />
                </div>
                <div className='header_nav'>
                    <div className='header_link'><a href='https://www.kuaizhan.com/v3/homepage/agent' target='_blank'>合作加盟</a><div className='header_linkundeline' ></div></div>
                    <div className='header_link'><a href='https://www.kuaizhan.com/v3/homepage/pricing' target='_blank'>定价</a><div className='header_linkundeline' ></div></div>
                    <div className='header_link'><a href='https://www.kuaizhan.com/v3/passport/login?refer=https%3A%2F%2Fwww.kuaizhan.com%2Fv3%2Fkz-cloud%2Fmy-apps' target='_blank'>快站云</a><div className='header_linkUndeline' ></div></div>
                    <div className='header_link'><a href='https://www.kuaizhan.com/v5/taobao' target='_blank'>淘宝客</a><div className='header_linkundeline' ></div></div>
                    <div className='header_link'><a href='http://kuaima.kuaizhan.com' target='_blank'>快码活码短链</a><div className='header_linkundeline' ></div></div>
                </div>
            </div>


            <div className='header_right'>
                <div className='header_button'>
                    <div className='header_login'>登录</div>
                    <div className='header_register'>立即注册</div>
                </div>

                <div className='header_menu'>
                    <div className='header_shortLine'></div>
                    <div className='header_longLine'></div>
                    <div className='header_shortLine'></div>
                </div>
            </div>
        </div>
    )
}