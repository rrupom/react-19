import { useState } from "react";
import Example1 from "./components/use-hook-data-fetching/Final";
import Example2 from "./components/use-hook-promise/Final";
import Example3 from "./components/use-hook-context/Final";
import Example4 from "./components/action/Final";
import Example5 from "./components/useFormStatus/Final";
import Example6 from "./components/useFormState/Final";
import Example7 from "./components/useOptimistic/Starter";
import Example8 from "./components/forwardRef/forwardRef";

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

  if (example === "action") {
    content = <Example4 />;
  }

  if (example === "useFormStatus") {
    content = <Example5 />;
  }

  if (example === "useFormState") {
    content = (
      <>
        <Example6 itemID={"1"} itemTitle={"Product 1"} />
        <Example6 itemID={"2"} itemTitle={"Product 2"} />
      </>
    );
  }

  if (example === "useOptimistic") {
    content = <Example7 />;
  }

  if (example === "forwardRef") {
    content = <Example8 />;
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
          <option value="action">&quot;Form Action&quot;</option>
          <option value="useFormStatus">&quot;Form Status&quot;</option>
          <option value="useFormState">&quot;Form State&quot;</option>
          <option value="useOptimistic">&quot;use Optimistic&quot;</option>
          <option value="forwardRef">&quot;forwardRef&quot;</option>
        </select>
      </div>
      <div className="mt-10">{content}</div>
    </div>
  );
}
