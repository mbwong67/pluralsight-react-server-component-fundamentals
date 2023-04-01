"use client";

import Boundary from "@/lib/boundary";
import React from "react";

export default function SessionsQuery() {

  const [query, setQuery] = React.useState<string>("");

  return (
    <form>
      <div className="input-group mb-1 mt-2">
        <Boundary>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Boundary>
      </div>
    </form>
  );
}
