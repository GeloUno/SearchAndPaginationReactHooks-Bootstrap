import React from 'react'
import { Pagination} from 'react-bootstrap';
export default function JobsPagination({page, setPage}) {
    return (
        <div>
            <Pagination>
                {(page>4)&& <Pagination.First onClick={()=>setPage(prevPage=>1)}></Pagination.First>}
                {(page>3)&& <Pagination.Prev onClick={()=>setPage(prevPage=>prevPage-1)}></Pagination.Prev>}
                {(page-2>=1)&&<Pagination.Item onClick={()=>setPage(prevPage=>prevPage-2)}>{page-2}</Pagination.Item>}
                {(page-1>=1)&&<Pagination.Item onClick={()=>setPage(prevPage=>prevPage-1)}>{page-1}</Pagination.Item>}               
                <Pagination.Item active onClick={()=>setPage(prevPage =>prevPage+1)}>{page}</Pagination.Item>
                <Pagination.Item onClick={()=>setPage(prevPage=>prevPage+1)}>{page+1}</Pagination.Item>
                <Pagination.Item onClick={()=>setPage(prevPage=>prevPage+2)}>{page+2}</Pagination.Item>      
                {(page!=100)&& <Pagination.Next onClick={()=>setPage(prevPage=>prevPage+1)}></Pagination.Next>}
            </Pagination>
            
        </div>
    )
}
