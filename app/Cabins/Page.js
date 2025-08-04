//here for running the pages or component in next keep the file name small not capital and if you now want to run the pages component from here now you have to add a page file in the cabins and add a js file in it

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
  return (
    <div>
      <h1>cabins page</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
