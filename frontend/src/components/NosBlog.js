import React from 'react'
import {Link} from 'react-router-dom';


function NosBlog(props) {
    return (
        <div>
        <li className='cards__blog'>
        <h2>Nuestro Blog</h2>
        <Link className='cards__blog__link' to={props.path}>
          <figure >
            <img
              className='cards__blog__img'
              alt=' Image'
              src={props.src}
            />
          </figure>
          <div className='cards__blog__info'>
            <h3 className='cards__blog__title'>{props.title}</h3>
            <p className='cards_blog_detail'>{props.detail}</p>
            <p className='cards_blog_text'>{props.text}</p>
          </div>
        </Link>
      </li>

        </div>
    );
}

export default NosBlog;
