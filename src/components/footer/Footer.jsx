import React from 'react'
import './footer.css'

const footerData={
  about:{
    title: "ICHuaHua",
    text:"Lorem ipsum dolor sit amet consectetur. Dictum eu mattis lectus imperdiet id iaculis. In morbi bibendum egestas etiam a. Risus sagittis diam id ac. Vivamus augue turpis velit eros."
  },
  columns:[
    {
      title:"Legal",
      links:["Trademarks"]
    },
    {
      title:"Sitemap",
      links:["So Home","What is ICHuaHua?","Much Wallets","Very Community","So Dogepedia"]
    },
    {
      title:"Sitemap",
      links:["About","Manifesto","Much Wallets","Advisers","Trailmap"]
    }
  ]
}

const Footer = () => {
  return (
    <div className='footer-sec'>
      <div className="footer-about">
        <h2 className="footer-about-head">{footerData.about.title}</h2>
        <p className="footer-about-text">{footerData.about.text}</p>
      </div>
      <div className="footer-column-cont">
        {
          footerData.columns.map((column)=>(
            <div className="footer-col">
              <h4 className="footer-col-head"></h4>
                {
                  column.links.map((link)=>(
                    <a href="#" className="footer-col-link">
                      {link}
                    </a>
                  ))
                }
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default Footer