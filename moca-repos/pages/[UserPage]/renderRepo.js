import React, { useState, useEffect } from "react";

export default function RenderRepo({ repo }) {
  return (
    <div>
      <h2>{repo.id}</h2>
      <h2> {repo.name} </h2>
    </div>
  );
}
