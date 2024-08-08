import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 120px;
    @media (max-width:780px){
        display: none;
        padding-top: 20px;
        padding-bottom: 50px;
    }
`

const PaginationWrap = styled.div`
    max-width: 305px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`

const PaginationNumberWrap = styled.div`
    max-width: 245px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`

const PaginationItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 2px;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    color: #AAAAAA;
    font-size: 0.875rem;
    line-height: 1.026rem;
    cursor: pointer;
    &.arrow{
        box-shadow: 0px 0px 4px 0px #0000001A;
    }
    &.active{
        background-color: #16BFB6;
        color: #fff;
    }
    img{
        width: 5px;
        height: 10px;
    }
`

function Pagination(props) {

    const {
        data = {size: 10, totalPages: 0, totalElements: 0},
        onChange,
        putPageNum // const [detailList, setDetailList] = useState([]);
        
    } = props;

    const [pageNum, setPageNum] = useState(1);

    const getStartOfRange = (number, unit) => {
        if (number < 1) {
            throw new Error("Number should be greater than or equal to 1");
        }
        if (unit < 1) {
            throw new Error("Unit should be greater than or equal to 1");
        }

        const startIndex = Math.floor((number - 1) / unit) * unit + 1
        // console.log(startIndex + '번 부터 시작')

        return startIndex;
    }

    const renderPagination = () => {
        const perView = data.size;
        const startIndex = getStartOfRange(pageNum, perView);
        const elements = [];

        for (let i = startIndex; i < (startIndex + perView); i++) {
            if (data.totalPages >= i) {
                elements.push(
                    <PaginationItem
                    key={i}
                        className={i === pageNum ? 'active' : ''}
                        onClick={() => onChangePage(i)}
                    >
                        {i}
                    </PaginationItem>
                );
            }
        }
        return elements;
    };

    const onChangePage = (page) => {

        if (page > 0 && page <= data?.totalPages) {
            setPageNum(page);
            // console.log(pageNum + '번 페이지 요청')
        }
    };

    useEffect(() => { // 이 컴포넌트 내부 클릭으로 페이지가 바꼈을때
        onChange(pageNum);
    }, [pageNum])

    useEffect(() => { // 부모에서 page가 바뀌었을때
        setPageNum(putPageNum)
    }, [putPageNum])

  return (
    <>
        {/* pc */}
        <PaginationContainer className='pagenation-container'>
            <PaginationWrap>
                <PaginationItem
                    className='arrow'
                    onClick={() => {
                        pageNum - data.size < 1 ? setPageNum(1) : onChangePage(pageNum - data.size)
                    }}
                    disabled={pageNum === 1}
                >
                    <img src='./../img/left_arrow.png' />
                </PaginationItem>
                <PaginationNumberWrap className={'pagenation-number-wrap'}>
                    {   
                        data.totalElements === 0 ?
                        <PaginationItem className='active'>1</PaginationItem>
                        : 
                        renderPagination()

                    }
                </PaginationNumberWrap>
                <PaginationItem
                    className='arrow'
                    onClick={() => {
                        if (data.totalElements !== 0) {
                            pageNum + data.size > data.totalPages ? setPageNum(data.totalPages) : onChangePage(pageNum + data.size)
                        }
                    }}
                    disabled={pageNum === data?.totalPages}
                >
                    <img src='./../img/right_arrow.png' />
                </PaginationItem>
            </PaginationWrap>
        </PaginationContainer>
    </>

  )
}

export default Pagination

/* 
   
    const [pageNum, setPageNum] = useState(1);



    const isMobile = useDeviceDetect(); 이거 src/컴포넌트/유틸에 있음

    useEffect(() => { // 기기 전환 될때마다 1페이지로 초기화
        setPageNum(1);
    }, [isMobile])

    return (
        
        <Pagination data={data?.content && data} onChange={(num) => setPageNum(num)} putPageNum={pageNum} />

    )
*/