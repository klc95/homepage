import React from 'react'
import './index.less'
import CreateWeb from '../Img/CreateWeb.png'
import OfficialAccounts from '../Img/OfficialAccounts.png'
import KZForm from '../Img/KZForm.png'
import Vote from '../Img/Vote.png'
import Comment from '../Img/Comment.png'
import Applet from '../Img/Applet.png'
import SitePanelImg from '../Img/SitePanelImg.png'
import attractFans from '../Img/attractFans.png'
import enhanceWeChatCapability from '../Img/enhanceWeChatCapability.png'
import fansManagement from '../Img/fansManagement.png'
import visualDataStatistics from '../Img/visualDataStatistics.png'
import quickVote from '../Img/quickVote.png'
import cloudEvaluation from '../Img/cloudEvaluation.png'
import advertising from '../Img/advertising.png'
import sogou from '../Logo/sogou.png'
import sohushipin from '../Logo/sohushipin.png'
import sohuqiche from '../Logo/sohuqiche.png'
import tengxunyun from '../Logo/tengxunyun.png'
import gaode from '../Logo/gaode.png'
import sogousousuo from '../Logo/sogousousuo.png'
import kr from '../Logo/kr.png'
import shejidiguo from '../Logo/shejidiguo.png'
import biaodandashi from '../Logo/biaodandashi.png'
import jifeng from '../Logo/jifeng.png'
import dianjing from '../Logo/dianjing.png'
import zhichikefu from '../Logo/zhichikefu.png'
import design from '../Logo/design.png'
import zhongguoshejiwang from '../Logo/zhongguoshejiwang.png'
import housite from '../Logo/housite.png'
import nuanshi from '../Logo/nuanshi.png'
import xinbang from '../Logo/xinbang.png'
import baimishenghuo from '../Logo/baimishenghuo.png'
import shejipi from '../Logo/shejipi.png'
import changyanyunping from '../Logo/changyanyunping.png'
import kuaikeduo from '../Logo/kuaikeduo.png'
import QRforService from '../Img/QRforService.png'
import WeChatQR from '../Img/WeChatQR.png'
import '../iconTick/iconfont.less'
import Carousel from '../swiper'


export default function Homepage(props: any) {
    return (
        <div className='homepage_wrapper'>
            <div className='homepage_screen homepage_one'>
                <div className='homepage_contents'>
                    <div className='homepage_serviceMenu'>
                        <div className='homepage_menu'>
                            <div className='homepage_menuTitle'>产品服务</div>
                            <div className='homepage_menuLinks'>
                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={CreateWeb} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>建站</div>
                                        <div className='homepage_linkTip'>零门槛快速建站</div>
                                    </div>
                                </div>

                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={OfficialAccounts} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>公众号</div>
                                        <div className='homepage_linkTip'>快速吸粉、高效管理</div>
                                    </div>
                                </div>

                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={KZForm} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>快站表单</div>
                                        <div className='homepage_linkTip'>信息收集、用户数据分析</div>
                                    </div>
                                </div>

                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={Vote} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>快投票</div>
                                        <div className='homepage_linkTip'>个性化投票系统</div>
                                    </div>
                                </div>

                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={Comment} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>畅言云评</div>
                                        <div className='homepage_linkTip'>智能评论管理</div>
                                    </div>
                                </div>

                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={Applet} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>小程序</div>
                                        <div className='homepage_linkTip'>拖拽式快速搭建小程序</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='homepage_carousel'>
                        <div className='homepage_bannerCarousel'>
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>

            <div className='homepage_screen homepage_two'>
                <div className='homepage_container-1'>
                    <div className='homepage_containerTitle'>零门槛建站工具</div>
                    <div className='homepage_sitePanel'>
                        <img className='homepage_sitePanelImg' src={SitePanelImg} />
                        <div className='homepage_siteCards'>
                            <div className='homepage_siteCard'>
                                <div className='homepage_siteCardTitle'>三分钟快速建站</div>
                                <div className='homepage_siteCardDescriptions'>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>模版丰富</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>拖拽编辑</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>一键生成App</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>快速预览</div>
                                    </div>
                                </div>
                            </div>
                            <div className='homepage_siteCard'>
                                <div className='homepage_siteCardTitle'>独立域名、SEO优化更多增值服务</div>
                                <div className='homepage_siteCardDescriptions'>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>百度快速收录</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>META设置等功能主力SEO优化</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>快速获取流量</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>支持绑定独立域名</div>
                                    </div>
                                </div>
                            </div>
                            <div className='homepage_siteCard'>
                                <div className='homepage_siteCardTitle'>文章社区电商</div>
                                <div className='homepage_siteCardDescriptions'>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>成熟稳定的内容管理系统</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>提升内容管理效率</div>
                                    </div>
                                </div>
                            </div>
                            <div className='homepage_siteCard'>
                                <div className='homepage_siteCardTitle'>海量模版和营销建站</div>
                                <div className='homepage_siteCardDescriptions'>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>助力企业打造专属官网</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>提升品牌价值</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>满足电商交易场景</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>多商铺、拼团等多种营销功能</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='homepage_optBtn'>
                        <div className='homepage_btn homepage_detailedIntroduce'>详情介绍</div>
                        <div className='homepage_btn homepage_freeToCreate'>免费创建</div>
                    </div>
                </div>
            </div>

            <div className='homepage_screen homepage_three'>
                <div className='homepage_container-2'>
                    <div className='homepage_containerTitle'>公众号</div>
                    <div className='homepage_officialAccountPanel'>
                        <div className='homepage_descCards'>
                            <div className='homepage_descCard'>
                                <div className='homepage_OACard'>
                                    <img className='homepage_OACardImg' src={attractFans} />
                                    <div className='homepage_OACardContent'>
                                        <div className='homepage_OACardTitle'>
                                            <div className='homepage_OACardText'>多元途径快速涨粉</div>
                                            <div className='homepage_OACardText'>指数级获取粉丝</div>
                                        </div>
                                        <div className='homepage_OACardDescriptions'>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-1'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>自动粉丝标签</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-1'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>参与二维码</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-1'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>投票吸粉</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-1'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>微积粉</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='homepage_descCard'>
                                <div className='homepage_OACard'>
                                    <img className='homepage_OACardImg' src={enhanceWeChatCapability} />
                                    <div className='homepage_OACardContent'>
                                        <div className='homepage_OACardTitle'>
                                            <div className='homepage_OACardText'>增强微信推送能力</div>
                                            <div className='homepage_OACardText'>提升粉丝活跃度</div>
                                        </div>
                                        <div className='homepage_OACardDescriptions'>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-2'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>无限群发</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-2'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>互动后推送</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-2'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>定时推送</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-2'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>个性化推送</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='homepage_descCard'>
                                <div className='homepage_OACard'>
                                    <img className='homepage_OACardImg' src={fansManagement} />
                                    <div className='homepage_OACardContent'>
                                        <div className='homepage_OACardTitle'>
                                            <div className='homepage_OACardText'>精细化粉丝管理</div>
                                            <div className='homepage_OACardText'>提升管理效率</div>
                                        </div>
                                        <div className='homepage_OACardDescriptions'>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-3'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>粉丝标签</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-3'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>自定义菜单</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-3'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>自定义回复</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-3'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>消息管理</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='homepage_descCard'>
                                <div className='homepage_OACard'>
                                    <img className='homepage_OACardImg' src={visualDataStatistics} />
                                    <div className='homepage_OACardContent'>
                                        <div className='homepage_OACardTitle'>
                                            <div className='homepage_OACardText'>可视化数据统计</div>
                                            <div className='homepage_OACardText'>运营数据一键导出</div>
                                        </div>
                                        <div className='homepage_OACardDescriptions'>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-4'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>粉丝新增</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-4'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>活跃</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-4'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>留存数据</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='homepage_optBtn'>
                            <div className='homepage_btn homepage_immediateUse'>立即使用</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='homepage_screen homepage_four'>
                <div className='homepage_container-3'>
                    <div className='homepage_containerTitle'>营销互动</div>
                    <div className='homepage_marketingPanel'>
                        <div className='homepage_marketingPanelItem homepage_marketingpanelItem-1'>
                            <div className='homepage_marketingItemCard'>
                                <div className='homepage_marketingCard'>
                                    <div className='homepage_marketingCardContent'>
                                        <div className='homepage_marketingCardTitle'>快投票</div>
                                        <div className='homepage_marketingCardDescriptions'>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-1'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>扫码关注公众号投票，通过投票增长粉丝</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-1'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>精准数据监控实时统计</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-1'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>礼物投票功能、为参选者送礼物、投票活动有收入</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-1'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>智能防刷票</div>
                                            </div>
                                        </div>
                                        <div className='homepage_btn homepage_marketingBtn-1'>立即使用</div>
                                    </div>
                                </div>
                            </div>
                            <img className='homepage_marketingItemImg-1' src={quickVote}/>
                        </div>
                        <div className='homepage_marketingPanelItem'>
                        <img className='homepage_marketingItemImg-2' src={cloudEvaluation}/>
                            <div className='homepage_marketingItemCard'>
                                <div className='homepage_marketingCard'>
                                    <div className='homepage_marketingCardContent'>
                                        <div className='homepage_marketingCardTitle'>畅言云评</div>
                                        <div className='homepage_marketingCardDescriptions'>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-2'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>智能评论管理</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-2'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>PC/WAP/APP多端适配</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-2'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>权限管理/管理员分权限支持多人审核</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-2'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>移动端、反垃圾、多插件票</div>
                                            </div>
                                        </div>
                                        <div className='homepage_btn homepage_marketingBtn-2'>立即使用</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='homepage_marketingPanelItem homepage_marketingpanelItem-1'>
                            <div className='homepage_marketingItemCard'>
                                <div className='homepage_marketingCard'>
                                    <div className='homepage_marketingCardContent'>
                                        <div className='homepage_marketingCardTitle'>畅盈广告</div>
                                        <div className='homepage_marketingCardDescriptions'>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-3'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>丰富广告形式</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-3'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>高额收益、随时提现</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-3'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>数据统计</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-3'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>一键接入、精准服务</div>
                                            </div>
                                        </div>
                                        <div className='homepage_btn homepage_marketingBtn-3'>立即使用</div>
                                    </div>
                                </div>
                            </div>
                            <img className='homepage_marketingItemImg-3' src={advertising}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='homepage_screen homepage_five'>
                <div className='homepage_container-4'>
                <div className='homepage_containerTitle'>用心做服务 成就行业口碑影响力</div>
                <div className='homepage_userPanel'>
                    <div className='homepage_userPanelData'>
                        <div className='homepage_dataItem'>
                            <div className='homepage_dataNumber'>
                                <span className='homepage_emphasisNum'>600</span>
                                <span className='homepage_plusSymbol'>+</span>
                                <span className='homepage_dataunit'>万</span>
                            </div>
                            <div className='homepage_dataTitle'>注册用户</div>
                        </div>
                        <div className='homepage_dataItem'>
                            <div className='homepage_dataNumber'>
                                <span className='homepage_emphasisNum'>900</span>
                                <span className='homepage_plusSymbol'>+</span>
                                <span className='homepage_dataunit'>万</span>
                            </div>
                            <div className='homepage_dataTitle'>累计服务站点</div>
                        </div>
                        <div className='homepage_dataItem'>
                            <div className='homepage_dataNumber'>
                                <span className='homepage_emphasisNum'>360</span>
                                <span className='homepage_plusSymbol'>+</span>
                                <span className='homepage_dataunit'>种</span>
                            </div>
                            <div className='homepage_dataTitle'>覆盖行业</div>
                        </div>
                        
                    </div>
                    <div className='homepage_userPanelWords'>
                        <p className='homepage_emphasisText'>他们都在用搜狐快站</p>
                        <span className='homepage_shallowText'>来自政府组织、互联网、媒体、教育等各个行业的用户</span>
                        <span className='homepage_shallowText'>以下为友情链接</span>
                    </div>
                    <div className='homepage_users'>
                        <ul className='homepage_usersPanelUl'>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.sogou.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='搜狗' src={sogou}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://tv.sohu.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='搜狐视频' src={sohushipin}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://auto.sohu.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='搜狐汽车' src={sohuqiche}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://cloud.tencent.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='腾讯云' src={tengxunyun}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://ditu.amap.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='高德地图' src={gaode}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://zhanzhang.sogou.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='搜狗搜索' src={sogousousuo}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://36kr.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='36kr' src={kr}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.warting.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='设计帝国' src={shejidiguo}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.jsform.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='表单大师' src={biaodandashi}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='http://www.gfan.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='机锋' src={jifeng}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://e.360.cn/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='360点睛' src={dianjing}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.sobot.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='智齿客服' src={zhichikefu}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.68design.net/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='68Design' src={design}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='http://www.cndesign.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='中国设计网' src={zhongguoshejiwang}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://weixinhost.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='侯斯特' src={housite}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.nuanshi100.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='暖石' src={nuanshi}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.newrank.cn/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='新榜' src={xinbang}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.100msh.net/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='百米生活' src={baimishenghuo}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.shejipi.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='设计癖' src={shejipi}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='http://changyan.kuaizhan.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='畅言云评' src={changyanyunping}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='http://kuaikeduo.kuaizhan.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='快客多' src={kuaikeduo}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            
            <div className='homepage_ourInfo'>
                 <div className='homepage_ourInfoContainer'>
                     <div className='homepage_callingCard'>
                         <div className='homepage_callingCardTitle'>
                             <div className='homepage_verticalLine'></div>
                             <span>更多服务</span>
                         </div>
                         <div className='homepage_callingCardCut'></div>
                         <div className='homepage_callingCardContent'>
                             <div className='homepage_ourInfoItems'>
                                 <a className='homepage_ourInfoItem' href='https://www.kuaizhan.com/v3/homepage/cases' target='_blank'>案例</a>
                                 <a className='homepage_ourInfoItem' href='https://www.kuaizhan.com/v3/homepage/about' target='_blank'>关于我们</a>
                                 <a className='homepage_ourInfoItem' href='https://i.kuaizhan.com/90/3/p2649405090dde7' target='_blank'>快站大学</a>
                                 <a className='homepage_ourInfoItem' href='https://wiki.kuaizhan.com/pub/%E9%A6%96%E9%A1%B5' target='_blank'>帮助中心</a>
                             </div>
                         </div>
                     </div>
                     <div className='homepage_callingCard'>
                         <div className='homepage_callingCardTitle'>
                             <div className='homepage_verticalLine'></div>
                             <span>在线咨询</span>
                         </div>
                         <div className='homepage_callingCardCut'></div>
                         <div className='homepage_callingCardContent'>
                             <div className='homepage_ourInfoItems'>
                                 <div className='homepage_ourInfoItem' >违法违规信息举报电话 | 免费客服热线</div>
                                 <div className='homepage_ourInfoItem homepage_ourInfoItemTele' >400-780-9680</div>
                                 <div className='homepage_ourInfoItem' >周一至周五 9:30-18:30</div>
                                 <div className='homepage_ourInfoItem' >地址：北京市海淀区世纪科贸大厦B座</div>
                             </div>
                         </div>
                     </div>
                     <div className='homepage_callingCard'>
                         <div className='homepage_callingCardTitle'>
                             <div className='homepage_verticalLine'></div>
                             <span>合作微信</span>
                         </div>
                         <div className='homepage_callingCardCut'></div>
                         <div className='homepage_callingCardContent'>
                             <div className='homepage_ourInfoItems'>
                                 <div className='homepage_QRcodeWrapper'>
                                     <div className='homepage_QRcodeContainer-1'>
                                         <div className='homepage_QRcodeContainerTitle'>客服人员</div>
                                         <div className='homepage_QRcode'><img src={QRforService}/></div>
                                     </div>
                                     <div className='homepage_QRcodeContainer-2'>
                                         <div className='homepage_QRcodeContainerTitle'>微信公众号</div>
                                         <div className='homepage_QRcode'><img src={WeChatQR}/></div>
                                     </div>
                                     
                                 </div>
                                 <div className='homepage_ourInfoItem homepage_ourInfoEmail'>
                                     "商务合作: "
                                     <a className='homepage_ourInfoItem' href='https://www.kuaizhan.com/malito:suyuchun@icloudfuture.com'>suyuchun@icloudfuture.com</a>
                                 </div>

                             </div>
                         </div>
                     </div>
                     <div className='homepage_callingCard'>
                         <div className='homepage_callingCardTitle'>
                             <div className='homepage_verticalLine'></div>
                             <span>免费试用</span>
                         </div>
                         <div className='homepage_callingCardCut'></div>
                         <div className='homepage_callingCardContent'>
                             <div className='homepage_ourInfoItems'>
                                 <div className='homepage_freeTrial'>
                                     <input className='homepage_freeTrial-input' placeholder='请输入手机号'/>
                                     <div className='homepage_freeTrial-btn'>试用</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>

            <div className='homepage_layout-footer'>
                Copyright@2021 Kuaizhan.com Inc. All Rights Reserved. 云站科技 版权所有 北京云站科技有限公司
                <a href='https://beian.miit.gov.cn/#/Integrated/index'>京ICP备18063655号-1</a>
            </div>
            
            <div className='homepage_createBtn'><a href='https://www.kuaizhan.com/v2/passport/reg'>免费注册</a></div>
        </div>
    )
}