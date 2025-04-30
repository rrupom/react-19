import { useState } from "react";
import Example1 from "./components/use-hook-data-fetching/Final";
import Example2 from "./components/use-hook-promise/Final";
import Example3 from "./components/use-hook-context/Final";

export default function App() {
  const [example, setExample] = useState("");

  const handleChange = (e) => {
    setExample(e.target.value);
  };

  let content;

  if (example === "example-1") {
    content = <Example1 />;
  }

  if (example === "example-2") {
    content = <Example2 />;
  }

  if (example === "example-3") {
    content = <Example3 />;
  }

  return (
    <div className="p-12">
      <div>
        Hello I am Rupom a passionate software engineer. I am experimenting
        about React 19 features
      </div>
      <div className="mt-10">
        <select onChange={handleChange}>
          <option value={""}>Select example</option>
          <option value="example-1">&quot;use&quot; Hook to fetch data</option>
          <option value="example-2"> &quot;use&quot; Hook with promise</option>
          <option value="example-3"> &quot;use&quot; Hook with context</option>
        </select>
      </div>
      <div className="mt-10">{content}</div>
    </div>
  );
}
