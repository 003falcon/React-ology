export default function Entry(props) {
  return (
    <article className="entry">
      <div className="entry_img">
        <img alt={props.image_alt} src={props.image_path}/>
      </div>
      <div>
        <div className="entry_content">
          <img className="entry_marker" alt="marker" src="../imgs/marker.png" />
          <h5 className="entry_country">{props.country}</h5>
          <a className="entry_map-link"
            target="_blank"
            href={props.map_link}
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="entry_title">{props.title}</h1>

        <h3 className="entry_dates">{props.date}</h3>
        <p className="entry_description">{props.description}
        </p>
      </div>
    </article>
  );
}
