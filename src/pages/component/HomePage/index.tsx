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
                            <div className='homepage_menuTitle'>????????????</div>
                            <div className='homepage_menuLinks'>
                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={CreateWeb} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>??????</div>
                                        <div className='homepage_linkTip'>?????????????????????</div>
                                    </div>
                                </div>

                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={OfficialAccounts} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>?????????</div>
                                        <div className='homepage_linkTip'>???????????????????????????</div>
                                    </div>
                                </div>

                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={KZForm} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>????????????</div>
                                        <div className='homepage_linkTip'>?????????????????????????????????</div>
                                    </div>
                                </div>

                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={Vote} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>?????????</div>
                                        <div className='homepage_linkTip'>?????????????????????</div>
                                    </div>
                                </div>

                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={Comment} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>????????????</div>
                                        <div className='homepage_linkTip'>??????????????????</div>
                                    </div>
                                </div>

                                <div className='homepage_linksItem'>
                                    <img className='homepage_linkImg' src={Applet} alt='-' />
                                    <div className='homepage_linkText'>
                                        <div className='homepage_linkTitle'>?????????</div>
                                        <div className='homepage_linkTip'>??????????????????????????????</div>
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
                    <div className='homepage_containerTitle'>?????????????????????</div>
                    <div className='homepage_sitePanel'>
                        <img className='homepage_sitePanelImg' src={SitePanelImg} />
                        <div className='homepage_siteCards'>
                            <div className='homepage_siteCard'>
                                <div className='homepage_siteCardTitle'>?????????????????????</div>
                                <div className='homepage_siteCardDescriptions'>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>????????????</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>????????????</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>????????????App</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>????????????</div>
                                    </div>
                                </div>
                            </div>
                            <div className='homepage_siteCard'>
                                <div className='homepage_siteCardTitle'>???????????????SEO????????????????????????</div>
                                <div className='homepage_siteCardDescriptions'>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>??????????????????</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>META?????????????????????SEO??????</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>??????????????????</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>????????????????????????</div>
                                    </div>
                                </div>
                            </div>
                            <div className='homepage_siteCard'>
                                <div className='homepage_siteCardTitle'>??????????????????</div>
                                <div className='homepage_siteCardDescriptions'>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>?????????????????????????????????</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>????????????????????????</div>
                                    </div>
                                </div>
                            </div>
                            <div className='homepage_siteCard'>
                                <div className='homepage_siteCardTitle'>???????????????????????????</div>
                                <div className='homepage_siteCardDescriptions'>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>??????????????????????????????</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>??????????????????</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>????????????????????????</div>
                                    </div>
                                    <div className='homepage_descriptionItem'>
                                        <div className='homepage_descriptionItemIcon'>
                                            <div className='homepage_circleIcon'></div>
                                        </div>
                                        <div className='homepage_descriptionItemContent'>???????????????????????????????????????</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='homepage_optBtn'>
                        <div className='homepage_btn homepage_detailedIntroduce'>????????????</div>
                        <div className='homepage_btn homepage_freeToCreate'>????????????</div>
                    </div>
                </div>
            </div>

            <div className='homepage_screen homepage_three'>
                <div className='homepage_container-2'>
                    <div className='homepage_containerTitle'>?????????</div>
                    <div className='homepage_officialAccountPanel'>
                        <div className='homepage_descCards'>
                            <div className='homepage_descCard'>
                                <div className='homepage_OACard'>
                                    <img className='homepage_OACardImg' src={attractFans} />
                                    <div className='homepage_OACardContent'>
                                        <div className='homepage_OACardTitle'>
                                            <div className='homepage_OACardText'>????????????????????????</div>
                                            <div className='homepage_OACardText'>?????????????????????</div>
                                        </div>
                                        <div className='homepage_OACardDescriptions'>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-1'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>??????????????????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-1'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>???????????????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-1'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>????????????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-1'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>?????????</div>
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
                                            <div className='homepage_OACardText'>????????????????????????</div>
                                            <div className='homepage_OACardText'>?????????????????????</div>
                                        </div>
                                        <div className='homepage_OACardDescriptions'>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-2'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>????????????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-2'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>???????????????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-2'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>????????????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-2'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>???????????????</div>
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
                                            <div className='homepage_OACardText'>?????????????????????</div>
                                            <div className='homepage_OACardText'>??????????????????</div>
                                        </div>
                                        <div className='homepage_OACardDescriptions'>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-3'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>????????????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-3'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>???????????????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-3'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>???????????????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-3'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>????????????</div>
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
                                            <div className='homepage_OACardText'>?????????????????????</div>
                                            <div className='homepage_OACardText'>????????????????????????</div>
                                        </div>
                                        <div className='homepage_OACardDescriptions'>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-4'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>????????????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-4'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>??????</div>
                                            </div>
                                            <div className='homepage_OACardDescItem'>
                                                <div className='homepage_OACardDescItemIcon'><i className='iconfont homepage_icon-4'>&#xe632;</i></div>
                                                <div className='homepage_OAcardDescItemContent'>????????????</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='homepage_optBtn'>
                            <div className='homepage_btn homepage_immediateUse'>????????????</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='homepage_screen homepage_four'>
                <div className='homepage_container-3'>
                    <div className='homepage_containerTitle'>????????????</div>
                    <div className='homepage_marketingPanel'>
                        <div className='homepage_marketingPanelItem homepage_marketingpanelItem-1'>
                            <div className='homepage_marketingItemCard'>
                                <div className='homepage_marketingCard'>
                                    <div className='homepage_marketingCardContent'>
                                        <div className='homepage_marketingCardTitle'>?????????</div>
                                        <div className='homepage_marketingCardDescriptions'>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-1'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>??????????????????????????????????????????????????????</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-1'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>??????????????????????????????</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-1'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>??????????????????????????????????????????????????????????????????</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-1'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>???????????????</div>
                                            </div>
                                        </div>
                                        <div className='homepage_btn homepage_marketingBtn-1'>????????????</div>
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
                                        <div className='homepage_marketingCardTitle'>????????????</div>
                                        <div className='homepage_marketingCardDescriptions'>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-2'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>??????????????????</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-2'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>PC/WAP/APP????????????</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-2'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>????????????/????????????????????????????????????</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-2'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>????????????????????????????????????</div>
                                            </div>
                                        </div>
                                        <div className='homepage_btn homepage_marketingBtn-2'>????????????</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='homepage_marketingPanelItem homepage_marketingpanelItem-1'>
                            <div className='homepage_marketingItemCard'>
                                <div className='homepage_marketingCard'>
                                    <div className='homepage_marketingCardContent'>
                                        <div className='homepage_marketingCardTitle'>????????????</div>
                                        <div className='homepage_marketingCardDescriptions'>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-3'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>??????????????????</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-3'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>???????????????????????????</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-3'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>????????????</div>
                                            </div>
                                            <div className='homepage_marketingDescItem'>
                                                <div className='homepage_marketingDescIcon'>
                                                    <div className='homepage_marketingCircleIcon-3'></div>
                                                </div>
                                                <div className='homepage_marketingDescContent'>???????????????????????????</div>
                                            </div>
                                        </div>
                                        <div className='homepage_btn homepage_marketingBtn-3'>????????????</div>
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
                <div className='homepage_containerTitle'>??????????????? ???????????????????????????</div>
                <div className='homepage_userPanel'>
                    <div className='homepage_userPanelData'>
                        <div className='homepage_dataItem'>
                            <div className='homepage_dataNumber'>
                                <span className='homepage_emphasisNum'>600</span>
                                <span className='homepage_plusSymbol'>+</span>
                                <span className='homepage_dataunit'>???</span>
                            </div>
                            <div className='homepage_dataTitle'>????????????</div>
                        </div>
                        <div className='homepage_dataItem'>
                            <div className='homepage_dataNumber'>
                                <span className='homepage_emphasisNum'>900</span>
                                <span className='homepage_plusSymbol'>+</span>
                                <span className='homepage_dataunit'>???</span>
                            </div>
                            <div className='homepage_dataTitle'>??????????????????</div>
                        </div>
                        <div className='homepage_dataItem'>
                            <div className='homepage_dataNumber'>
                                <span className='homepage_emphasisNum'>360</span>
                                <span className='homepage_plusSymbol'>+</span>
                                <span className='homepage_dataunit'>???</span>
                            </div>
                            <div className='homepage_dataTitle'>????????????</div>
                        </div>
                        
                    </div>
                    <div className='homepage_userPanelWords'>
                        <p className='homepage_emphasisText'>???????????????????????????</p>
                        <span className='homepage_shallowText'>????????????????????????????????????????????????????????????????????????</span>
                        <span className='homepage_shallowText'>?????????????????????</span>
                    </div>
                    <div className='homepage_users'>
                        <ul className='homepage_usersPanelUl'>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.sogou.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='??????' src={sogou}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://tv.sohu.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='????????????' src={sohushipin}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://auto.sohu.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='????????????' src={sohuqiche}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://cloud.tencent.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='?????????' src={tengxunyun}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://ditu.amap.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='????????????' src={gaode}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://zhanzhang.sogou.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='????????????' src={sogousousuo}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://36kr.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='36kr' src={kr}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.warting.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='????????????' src={shejidiguo}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.jsform.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='????????????' src={biaodandashi}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='http://www.gfan.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='??????' src={jifeng}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://e.360.cn/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='360??????' src={dianjing}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.sobot.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='????????????' src={zhichikefu}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.68design.net/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='68Design' src={design}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='http://www.cndesign.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='???????????????' src={zhongguoshejiwang}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://weixinhost.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='?????????' src={housite}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.nuanshi100.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='??????' src={nuanshi}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.newrank.cn/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='??????' src={xinbang}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.100msh.net/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='????????????' src={baimishenghuo}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='https://www.shejipi.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='?????????' src={shejipi}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='http://changyan.kuaizhan.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='????????????' src={changyanyunping}/>
                                </a>
                            </li>
                            <li className='homepage_userPanelLink'>
                                <a href='http://kuaikeduo.kuaizhan.com/'  target='_blank' rel='nofollow'>
                                    <img className='homepage_usersPanelLogo' alt='?????????' src={kuaikeduo}/>
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
                             <span>????????????</span>
                         </div>
                         <div className='homepage_callingCardCut'></div>
                         <div className='homepage_callingCardContent'>
                             <div className='homepage_ourInfoItems'>
                                 <a className='homepage_ourInfoItem' href='https://www.kuaizhan.com/v3/homepage/cases' target='_blank'>??????</a>
                                 <a className='homepage_ourInfoItem' href='https://www.kuaizhan.com/v3/homepage/about' target='_blank'>????????????</a>
                                 <a className='homepage_ourInfoItem' href='https://i.kuaizhan.com/90/3/p2649405090dde7' target='_blank'>????????????</a>
                                 <a className='homepage_ourInfoItem' href='https://wiki.kuaizhan.com/pub/%E9%A6%96%E9%A1%B5' target='_blank'>????????????</a>
                             </div>
                         </div>
                     </div>
                     <div className='homepage_callingCard'>
                         <div className='homepage_callingCardTitle'>
                             <div className='homepage_verticalLine'></div>
                             <span>????????????</span>
                         </div>
                         <div className='homepage_callingCardCut'></div>
                         <div className='homepage_callingCardContent'>
                             <div className='homepage_ourInfoItems'>
                                 <div className='homepage_ourInfoItem' >?????????????????????????????? | ??????????????????</div>
                                 <div className='homepage_ourInfoItem homepage_ourInfoItemTele' >400-780-9680</div>
                                 <div className='homepage_ourInfoItem' >??????????????? 9:30-18:30</div>
                                 <div className='homepage_ourInfoItem' >?????????????????????????????????????????????B???</div>
                             </div>
                         </div>
                     </div>
                     <div className='homepage_callingCard'>
                         <div className='homepage_callingCardTitle'>
                             <div className='homepage_verticalLine'></div>
                             <span>????????????</span>
                         </div>
                         <div className='homepage_callingCardCut'></div>
                         <div className='homepage_callingCardContent'>
                             <div className='homepage_ourInfoItems'>
                                 <div className='homepage_QRcodeWrapper'>
                                     <div className='homepage_QRcodeContainer-1'>
                                         <div className='homepage_QRcodeContainerTitle'>????????????</div>
                                         <div className='homepage_QRcode'><img src={QRforService}/></div>
                                     </div>
                                     <div className='homepage_QRcodeContainer-2'>
                                         <div className='homepage_QRcodeContainerTitle'>???????????????</div>
                                         <div className='homepage_QRcode'><img src={WeChatQR}/></div>
                                     </div>
                                     
                                 </div>
                                 <div className='homepage_ourInfoItem homepage_ourInfoEmail'>
                                     "????????????: "
                                     <a className='homepage_ourInfoItem' href='https://www.kuaizhan.com/malito:suyuchun@icloudfuture.com'>suyuchun@icloudfuture.com</a>
                                 </div>

                             </div>
                         </div>
                     </div>
                     <div className='homepage_callingCard'>
                         <div className='homepage_callingCardTitle'>
                             <div className='homepage_verticalLine'></div>
                             <span>????????????</span>
                         </div>
                         <div className='homepage_callingCardCut'></div>
                         <div className='homepage_callingCardContent'>
                             <div className='homepage_ourInfoItems'>
                                 <div className='homepage_freeTrial'>
                                     <input className='homepage_freeTrial-input' placeholder='??????????????????'/>
                                     <div className='homepage_freeTrial-btn'>??????</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>

            <div className='homepage_layout-footer'>
                Copyright@2021 Kuaizhan.com Inc. All Rights Reserved. ???????????? ???????????? ??????????????????????????????
                <a href='https://beian.miit.gov.cn/#/Integrated/index'>???ICP???18063655???-1</a>
            </div>
            
            <div className='homepage_createBtn'><a href='https://www.kuaizhan.com/v2/passport/reg'>????????????</a></div>
        </div>
    )
}