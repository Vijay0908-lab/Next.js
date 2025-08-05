//here for running the pages or component in next keep the file name small not capital and if you now want to run the pages component from here now you have to add a page file in the cabins and add a js file in it

import Counter from "../_components/Counter";

export default function Page() {
  return (
    <div>
      <h1>cabins page</h1>

      <Counter />
    </div>
  );
}
