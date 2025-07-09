import React from "react";
import avatar from "./imgs/user.png";
// import Star from './Star'
import starFilled from "./imgs/star-filled.png";
import starEmpty from "./imgs/star-empty.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "someemail@password.com",
    isFavourite: false,
  });
  let starIcon = contact.isFavourite ? starFilled : starEmpty;

  // function toggleFav()
  //   {
  //     setContact(prevContact=>(
  //       {
  //         ...prevContact,
  //         isFavourite:!prevContact.isFavourite
  //       }
  //     ))
  //   }

  return (
    <main>
      <article className="card">
        <img src={avatar} className="avatar" alt="User profile picture" />
        <div className="info">
          <button
            aria-pressed={contact.isFilled}
            aria-label={
              contact.isFavourite
                ? "Remove from favourites"
                : "Add to favourites"
            }
            className="favourite-button"
          >
            <img
              src={starIcon}
              alt={contact.isFavourite ? "filled star icon" : "empty star icon"}
              className="favourite"
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
