import React from 'react'
import { Pagination} from 'react-bootstrap';
export default function JobsPagination({page, setPage, pagesLength}) {
    return (
        <div>
            <Pagination>
                {(page>2)&& <Pagination.First onClick={()=>setPage(prevPage=>1)}></Pagination.First>}
                {(page>1)&& <Pagination.Prev onClick={()=>setPage(prevPage=>prevPage-1)}></Pagination.Prev>}
                {
                    // (page - 2 >= 1) && <Pagination.Item onClick={() => setPage(prevPage => prevPage - 2)}>{page - 2}</Pagination.Item>
                }
                {(page-1>=1)&&<Pagination.Item onClick={()=>setPage(prevPage=>prevPage-1)}>{page-1}</Pagination.Item>}               
                <Pagination.Item active onClick={()=>setPage(prevPage =>prevPage+1)}>{page}</Pagination.Item>
                {pagesLength === 50 && <Pagination.Item onClick={() => setPage(prevPage => prevPage + 1)}>{page + 1}</Pagination.Item>}               
                {pagesLength === 50 && <Pagination.Next onClick={() => setPage(prevPage => prevPage + 1)}></Pagination.Next>}
                {console.log('pagesLength', pagesLength)}
            </Pagination>
            
        </div>
    )
}
