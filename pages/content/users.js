import Error from "next/error";
/**fetch data using getStaticProps  */
export default function Page({ errorCode, data }) {
  // Render data...
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <>
      {data.map((i) => (
        <div className="text-justify">
          <div>
            <h4>{`${i.id}. ${i.title}`}</h4>
            <p>{i.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const errorCode = res.ok ? false : res.statusCode;
  const data = await res.json();

  // Pass data to the page via props
  // return { props: { data } };
  return {
    props: { errorCode, data: data },
  };
}

/**fetch data using getServerSideProps  */
// export async function getUsers({serverSideProps}){

//   return (

//   )
// }
