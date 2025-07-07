{/*This function renders the main content of the page,
  here,the points regarding React */}
export default function Main() {
  return (
    <main>
      <h1>Fun Facts about React</h1>
      <ul className="unordered-list">
        <li className="fact">Was first released in 2013</li>
        <li className="fact">Was originally created by Jordan Walke</li>
        <li className="fact">Has well over 100k stars on github</li>
        <li className="fact">Is maintained by Meta</li>
        <li className="fact">Powers thousands of enterprise apps,including mobile apps</li>
      </ul>
    </main>
  );
}
