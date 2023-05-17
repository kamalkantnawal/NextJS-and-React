export default function Hm({ data }) {
  return (
    <div>
      <h1>Data from the database:</h1>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.product_id}>{item.product_name}</li>
          ))}
      </ul>
    </div>
  );
}

{
  /* export async function getServerSideProps() {
    const response = await fetch('/api/mariadb');
    const data = await response.json();
    console.log(data[0])
  
    return {
      props: {
        data
      }
    };
  }
  */
}
