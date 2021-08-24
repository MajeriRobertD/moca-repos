import React, { useState, useEffect } from "react";
export default function RenderRepo({ repo }) {
  return (
    <div key={repo.id}>
      <h2> {repo.name} </h2>
    </div>
  );
}