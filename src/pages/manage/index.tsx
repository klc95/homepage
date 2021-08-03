import React, { useState, useEffect } from 'react';
import './index.less'

function createToDoRes(url: string) {
    fetch('http://localhost:8000/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `url=${url}`
    })
        .then(response => response.json())
        .then(json => console.log(json))
}

function deleteToDoRes(id: number) {
    fetch(`http://localhost:8000/homepage/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(json => console.log(json))
}

export default () => {
    const [value, setValue] = useState('');
    const [swiperlist, setSwiperlist] = useState<any>([]);

    useEffect(() => {
        fetch('http://localhost:8000/homepage/all')
            .then(response => response.json())
            .then(json => setSwiperlist(json.data))
    }, [])

    const handleOnChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleOnKeyPress = (e: any) => {
        if (e.which === 13) {
            const obj = {
                url: value
            };
            setSwiperlist([...swiperlist, obj])
            createToDoRes(value)
            setValue('')
        }
    }

    const handleRemove = (index: number) => {
        const newSwiperList = [...swiperlist]
        const id = newSwiperList[index].id
        newSwiperList.splice(index, 1)
        setSwiperlist(newSwiperList)
        deleteToDoRes(id)
    }

    return (
        <div>
            <div className='manage-header'>管理轮播图资源</div>

            <div className='manage-input'>
                <input type="text"
                    value={value}
                    placeholder='请添加轮播图资源URL'
                    onChange={handleOnChange}
                    onKeyPress={handleOnKeyPress} />
            </div>

            <div className='manage-body'>
                <div className='manage-itemWrapper'>
                    {swiperlist.map((item: any, index: number) => (
                        <div className='manage-item'>
                            <img className='item-img' src={item.url} />
                            <div className="item-remove" onClick={() => handleRemove(index)}>删除</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}