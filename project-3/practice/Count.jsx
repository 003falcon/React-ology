export default function Count(props)
{
  console.log(props);
  return (
  <h2 className="count">{props.count}</h2>
  );
}