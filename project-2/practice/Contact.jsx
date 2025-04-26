//props allow reusability

//without destructuring
// export default function Contact(props)
//with destructuring
export default function Contact({num,img_name ,title,ph_no,mail_id})

{
  // console.log(props)
  return <article className="contact-card">
    
  <img 
      src={img_name}
      alt="Photo of {props.title}"
  />
  <h3>{num}{title}</h3>
  <div className="info-group">
      <img 
          src="./imgs/phone-icon.png" 
          alt="phone icon" 
      />
      <p>{ph_no}</p>
  </div>
  <div className="info-group">
      <img 
          src="./imgs/mail-icon.png" 
          alt="mail icon"
      />
      <p>{mail_id}</p>
  </div>
</article>

}