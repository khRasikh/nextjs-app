function Page({ data }) {
  // Render data...
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
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
