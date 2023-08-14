import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function MostRead() {
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenItemIndex(index === openItemIndex ? -1 : index);
  };

  const items = [
    {
      title: 'الكلمات العشوائية',
      content: `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
  الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما. عليك أن تتحقق أولا أن ليس هناك أي كلمات أو عبارات مح`,
    },
    {
      title: 'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل',
      content: `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
  الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما. عليك أن تتحقق أولا أن ليس هناك أي كلمات أو عبارات مح`,
    },
    {
      title: 'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم',
      content: `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
  الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما. عليك أن تتحقق أولا أن ليس هناك أي كلمات أو عبارات مح`,
    },
    {
      title: 'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم',
      content: `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
  الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما. عليك أن تتحقق أولا أن ليس هناك أي كلمات أو عبارات مح`,
    },
  ];

  return (
    <div className="mostRead">
      <div className="ad">
        <img src="/images/Ad1.png" alt="Ad" />
      </div>
      <div className="most">
        <h1>الأكثر قراءة</h1>
        <div className="read">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <div className={`text ${openItemIndex === index ? 'active' : ''}`} onClick={() => handleItemClick(index)}>
                <h3 className={openItemIndex === index ? 'active' : ''}>{item.title}</h3>
                <span className={openItemIndex === index ? 'active' : ''}>
                  {openItemIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </div>
              <p style={{ display: openItemIndex === index ? 'block' : 'none' }}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostRead;