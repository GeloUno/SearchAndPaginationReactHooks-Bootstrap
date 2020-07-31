import React, { useState } from 'react'
import {Card, Button, Badge, Row, Accordion, Collapse} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'

export const Job = ({ job }) => {
  const [moreInfoShow, setMoreInfoShow] = useState(false)
    return (
        <Card style={{width:'18rem'}} className={'mb-4'}>
        {job.company_logo && <Card.Img className={'d-none d-md-block mw-10 mh-10'} variable="top" src={job.company_logo+'/100px180'}/>}
        <Card.Title className={'text-muted mb-4 mt-4'}>{job.title} in <span className={'text-muted font-weight-light'}>{job.company}</span></Card.Title>
        <Card.Subtitle className={'text-muted mb-3'}>{new Date(job.created_at).toLocaleDateString()}</Card.Subtitle>
        <Row className={'m-1'}>
        <Badge variant="dark"  className={'mr-2 p-2'}>{job.type}</Badge>
        <Badge variant="primary" className={'mr-2 p-2'}>{job.location}</Badge>
        </Row>
        <div style={{ wordBreak:'break-all'}}>
        <ReactMarkdown
        source={job.how_to_apply}   
         escapeHtml={false}     
        />
       </div>       
        {console.log('job', job)} 
        <div className="mb-2">
          <Button variant="primary" onClick={() => setMoreInfoShow(prevMoreInfo => !prevMoreInfo)}>{(moreInfoShow) ?'Hidden':'More'}</Button>         
        </div>
          <Collapse in={moreInfoShow}>
          <Card.Body>
            <ReactMarkdown
              source={job.description}   
              escapeHtml={false}     
            />
          </Card.Body>
        </Collapse>
        
        </Card>
    )
}
