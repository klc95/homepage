import React from 'react'
import './index.less'

export default function Header(props: any) {
    return (
        <div className='Header_wrapper'>

            <div className='Header_left'>
                <div className='Header_logo'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAAzCAYAAABv7BExAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJFRkJBNzk3MTlFMTFFQTg2MjdFNjRBRUI3NDZCNzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJFRkJBN0E3MTlFMTFFQTg2MjdFNjRBRUI3NDZCNzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkVGQkE3NzcxOUUxMUVBODYyN0U2NEFFQjc0NkI3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkVGQkE3ODcxOUUxMUVBODYyN0U2NEFFQjc0NkI3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjDqms8AAApESURBVHja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" alt="LOGO" className="kz-logo__image" />
                </div>
                <div className='Header_nav'>
                    <div className='Header_link'><a href='https://www.kuaizhan.com/v3/homepage/agent' target='_blank'>合作加盟</a><div className='Header_linkundeline' ></div></div>
                    <div className='Header_link'><a href='https://www.kuaizhan.com/v3/homepage/pricing' target='_blank'>定价</a><div className='Header_linkundeline' ></div></div>
                    <div className='Header_link'><a href='https://www.kuaizhan.com/v3/passport/login?refer=https%3A%2F%2Fwww.kuaizhan.com%2Fv3%2Fkz-cloud%2Fmy-apps' target='_blank'>快站云</a><div className='Header_linkUndeline' ></div></div>
                    <div className='Header_link'><a href='https://www.kuaizhan.com/v5/taobao' target='_blank'>淘宝客</a><div className='Header_linkundeline' ></div></div>
                    <div className='Header_link'><a href='http://kuaima.kuaizhan.com' target='_blank'>快码活码短链</a><div className='Header_linkundeline' ></div></div>
                </div>
            </div>


            <div className='Header_right'>
                <div className='Header_button'>
                    <div className='Header_login'>登录</div>
                    <div className='Header_register'>立即注册</div>
                </div>

                <div className='Header_menu'>
                    <div className='Header_shortline'></div>
                    <div className='Header_longline'></div>
                    <div className='Header_shortline'></div>
                </div>
            </div>
        </div>
    )
}