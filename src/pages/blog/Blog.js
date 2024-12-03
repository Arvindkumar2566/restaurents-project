import React from 'react';
import './Blog.css';
import Blogcomponent from './Blogcomponents/Blogcomponent';
import Blogcomponentbody from './Blogcomponents/Blogcomponentbody';

function Blog() {
  return (
    <div className="blog">
      <Blogcomponent/>
      <Blogcomponentbody/>
    </div>
  );
}

export default Blog;
