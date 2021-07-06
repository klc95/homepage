import React from 'react'
import './index.less'
import CreateWeb from '../Img/CreateWeb.png'
import OfficialAccounts from '../Img/OfficialAccounts.png'
import KZForm from '../Img/KZForm.png'
import Vote from '../Img/Vote.png'
import Comment from '../Img/Comment.png'
import Applet from '../Img/Applet.png'
import SitePanelImg from '../Img/SitePanelImg.png'

export default function HomePage(props: any) {
    return (
        <div className='homepage_wrapper'>
            <div className='homePage_screen homePage_one'>
                <div className='homePage_contents'>
                    <div className='homePage_serviceMenu'>
                        <div className='homePage_menu'>
                            <div className='homePage_menuTitle'>产品服务</div>
                            <div className='homePage_menuLinks'>
                                <div className='homePage_linksItem'>
                                    <img className='homePage_linkImg' src={CreateWeb} alt='-' />
                                    <div className='homePage_linkText'>
                                        <div className='homePage_linkTitle'>建站</div>
                                        <div className='homePage_linkTip'>零门槛快速建站</div>
                                    </div>
                                </div>

                                <div className='homePage_linksItem'>
                                    <img className='homePage_linkImg' src={OfficialAccounts} alt='-' />
                                    <div className='homePage_linkText'>
                                        <div className='homePage_linkTitle'>公众号</div>
                                        <div className='homePage_linkTip'>快速吸粉、高效管理</div>
                                    </div>
                                </div>

                                <div className='homePage_linksItem'>
                                    <img className='homePage_linkImg' src={KZForm} alt='-' />
                                    <div className='homePage_linkText'>
                                        <div className='homePage_linkTitle'>快站表单</div>
                                        <div className='homePage_linkTip'>信息收集、用户数据分析</div>
                                    </div>
                                </div>

                                <div className='homePage_linksItem'>
                                    <img className='homePage_linkImg' src={Vote} alt='-' />
                                    <div className='homePage_linkText'>
                                        <div className='homePage_linkTitle'>快投票</div>
                                        <div className='homePage_linkTip'>个性化投票系统</div>
                                    </div>
                                </div>

                                <div className='homePage_linksItem'>
                                    <img className='homePage_linkImg' src={Comment} alt='-' />
                                    <div className='homePage_linkText'>
                                        <div className='homePage_linkTitle'>畅言云评</div>
                                        <div className='homePage_linkTip'>智能评论管理</div>
                                    </div>
                                </div>

                                <div className='homePage_linksItem'>
                                    <img className='homePage_linkImg' src={Applet} alt='-' />
                                    <div className='homePage_linkText'>
                                        <div className='homePage_linkTitle'>小程序</div>
                                        <div className='homePage_linkTip'>拖拽式快速搭建小程序</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='homePage_carousel'></div>
                </div>
            </div>

            <div className='homePage_screen homePage_two'>
                <div className='homePage_container'>
                    <div className='homePage_containerTitle'>零门槛建站工具</div>
                    <div className='homePage_sitePanel'>
                        <img className='homePage_sitePanelImg' src={SitePanelImg} />
                        <div className='homePage_siteCards'>
                            <div className='homePage_siteCard'>
                                <div className='homePage_siteCardTitle'>三分钟快速建站</div>
                                <div className='homePage_siteCardDescriptions'>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>模版丰富</div>
                                    </div>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>拖拽编辑</div>
                                    </div>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>一键生成App</div>
                                    </div>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>快速预览</div>
                                    </div>
                                </div>
                            </div>
                            <div className='homePage_siteCard'>
                                <div className='homePage_siteCardTitle'>独立域名、SEO优化更多增值服务</div>
                                <div className='homePage_siteCardDescriptions'>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>百度快速收录</div>
                                    </div>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>META设置等功能主力SEO优化</div>
                                    </div>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>快速获取流量</div>
                                    </div>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>支持绑定独立域名</div>
                                    </div>
                                </div>
                            </div>
                            <div className='homePage_siteCard'>
                                <div className='homePage_siteCardTitle'>文章社区电商</div>
                                <div className='homePage_siteCardDescriptions'>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>成熟稳定的内容管理系统</div>
                                    </div>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>提升内容管理效率</div>
                                    </div>
                                </div>
                            </div>
                            <div className='homePage_siteCard'>
                                <div className='homePage_siteCardTitle'>海量模版和营销建站</div>
                                <div className='homePage_siteCardDescriptions'>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>助力企业打造专属官网</div>
                                    </div>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>提升品牌价值</div>
                                    </div>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>满足电商交易场景</div>
                                    </div>
                                    <div className='homePage_descriptionItem'>
                                        <div className='homePage_descriptionItemIcon'>
                                            <div className='homePage_circleIcon'></div>
                                        </div>
                                        <div className='homePage_descriptionItemContent'>多商铺、拼团等多种营销功能</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='homePage_optBtn'>
                        <div className='homePage_btn'></div>
                    </div>
                </div>
            </div>



            {/* <div className='homePage_screen homePage_three'></div>
            <div className='homePage_screen homePage_four'></div>
            <div className='homePage_screen homePage_five'></div>
            <div className='homePage_screen homePage_six'></div> */}
        </div>
    )
}