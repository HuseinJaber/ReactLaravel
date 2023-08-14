import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/api/aggregate-visits')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching aggregated visits', error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    axios.post('/api/clicks', { category })
      .then(response => {
        console.log('Click stored successfully');
        // You may want to update your UI or perform other actions here
      })
      .catch(error => {
        console.error('Error storing click', error);
      });
  };

  // Define categories and their images
  const predefinedCategories = [
    { name: 'اقتصاد', image: 'economy.jpeg' },
    { name: 'فيديو وصور', image: 'VideosAndImages.jpeg' },
    { name: 'رياضة', image: 'sport.jpeg' },
    { name: 'ثقافة', image: 'culture.jpg' },
  ];

  return (
    <div className='newscategories'>
      <div className='twoItems'>
        {predefinedCategories.slice(0, 2).map(category => (
          <div className='item' key={category.name}>
            <div className='imgContainer'>
              <img src={`/images/${category.image}`} alt={category.name} />
            </div>
            <div className='content'>
              <h2>{category.name}</h2>
              <button onClick={() => handleCategoryClick(category.name)}>المزيد</button>
            </div>
          </div>
        ))}
      </div>
      <div className='twoItems'>
        {predefinedCategories.slice(2).map(category => (
          <div className='item' key={category.name}>
            <div className='imgContainer'>
              <img src={`/images/${category.image}`} alt={category.name} />
            </div>
            <div className='content'>
              <h2>{category.name}</h2>
              <button onClick={() => handleCategoryClick(category.name)}>المزيد</button>
            </div>
          </div>
        ))}
      </div>
      <div className='item'>
        <div className='imgContainer'>
          <img src="/images/news.jpeg" alt='اخبار' />
        </div>
        <div className='content'>
          <h2>اخبار</h2>
          <button onClick={() => handleCategoryClick('اخبار')}>المزيد</button>
        </div>
      </div>
    </div>
  );
}

export default NewsCategories;