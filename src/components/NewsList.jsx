import React from 'react'


const getDateString = timestr => {
    return new Date(timestr).toDateString;
}

const NewsItem = ({item}) => (
    <div className='card mb-3'>
        {item.urlToImage && 
            <img 
                src={item.urlToImage}
                className='card-img-top'
                alt={item.title}
            />
        }
        <div className='card-body'>
            <a href={item.url} target='_blank' rel='noopener noreferrer' style={{color: '#424242'}}>
                <h4 className='card-title'>{item.title}</h4>
                <p>{item.content}</p>
            </a>
            <div className='d-flex mt-2 align-items-center'>
                <span>
                    <strong>Published At {getDateString(item.publishedAt)}</strong>
                </span>
                <div 
                    style={{
                        padding:'0.25rem 0.5rem',
                        background:'#ededed',
                        color:'#424242',
                        borderRadius:'0.25rem',
                        display:'inline-block'
                    }}
                    className='ml-auto'
                >
                    <small>{item.source.name}</small>
                </div>
            </div>
            
        </div>
    </div>
)


function NewsList({news}) {
    return (
        <div>
            {news && news.length === 0 && <h1>There has no news</h1>}
            {news && news.map((item) => (
                <NewsItem item={item} key={item.title} />
            ))}
        </div>
    )
}

export default NewsList
