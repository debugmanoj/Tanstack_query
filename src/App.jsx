import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useCommentsQuery } from "./Service/QueryHooks/fetchComments";

const queryClient = new QueryClient();


const ReactQueryDataComponent = () => {
  const { data, error, isLoading } = useCommentsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data &&
        data.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDataComponent />
  </QueryClientProvider>
);

export default App;
