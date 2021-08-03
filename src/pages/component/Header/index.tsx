import React, {useState} from 'react'
import './index.less'
import headerlog from '../Img/headerlog.png'
import { Drawer, Button } from 'antd';
import drawerLogo from '../Img/drawerLogo.png'


export default function Header(props: any) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
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

                <div className='header_menu' onClick={showDrawer}>
                    <div className='header_shortLine'></div>
                    <div className='header_longLine'></div>
                    <div className='header_shortLine'></div>
                </div>
            </div>
            <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            style={{ marginTop: '50px' }}
             >
                <div className='drawer_wrapper'>
                    <div className='drawer_headerWrapper'>
                    <div className='drawer_header'>
                        <img className='drawer_logo' src={drawerLogo}/>
                    </div>
                    </div>
                    <div className='drawer_bodyWrapper'>
                    <a className='drawer_link' href='/'>首页</a>
                    <a className='drawer_link' href='https://www.kuaizhan.com/v3/passport/login?refer=/v3/site/'>手机建站</a>
                    <a className='drawer_link' href='https://i.kuaizhan.com/v2/covers/?site_id=4316069638'>快站动态</a>
                    <a className='drawer_link' href='https://i.kuaizhan.com/clubpc/forums/W8g-qb58BAAQWYBl#!/topics/tags/all/pages/0'>快站分享</a>
                    <a className='drawer_link' href='tel://4007809680'>联系我们</a>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}