import React from 'react'
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi';

function Footer() {
  return (
    <div className='footer'>
        <div className='watch'>
            <h4>مشاهدة على التويتر</h4>
            <div className='social'>
                <div className="subscription-input">
                    <input type="email" placeholder="البريد الالكتروني" />
                    <button>الاشتراك</button>
                </div>
                <a href='/'><BiLogoTwitter /></a>
                <a href='/'><BiLogoFacebook /></a>
                <a href='/'><BiLogoLinkedin /></a>
                
            </div>
        </div>
        <div className='want'>
            <div className='field'>
                <h4>بما تتطلبه</h4>
                <p>
                هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل
                </p>
            </div>
            <div className='field'>
                <h4>بما تتطلبه</h4>
                <p>
                هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل
                </p>
            </div>
            <div className='field'>
                <h4>بما تتطلبه</h4>
                <p>
                هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer