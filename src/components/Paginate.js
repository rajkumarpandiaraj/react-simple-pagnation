import React from 'react'

function Paginate({postsPerPage, totalPosts, pagin}) {
    const pageNumber = [];
    for(let i = 1 ; i <= Math.ceil(totalPosts / postsPerPage); i++ ){
        pageNumber.push(i)
    }
    return (
        <ul className='pagination'>
            {
                pageNumber.map(number => (
                    <li className='page-item' key={number}>
                        <a href='!#' onClick={() => pagin(number)} className='page-link'>{number}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Paginate
