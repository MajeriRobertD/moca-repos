import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";

export default function RenderRepo({ repo, theQuery }) {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  console.log("bjodjfisdiojsaio", theQuery);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    router.push(`/Users/${theQuery}/${repo.login}`);
  };
  return (
    <ListItem
      button
      selected={selectedIndex === 0}
      onclick={(event) => {
        handleListItemClick(event, 0);
      }}
      key={repo.id}
    >
      <ListItemText
        primary={repo.name}
        secondary="Click here"
        onClick={() => router.push(`/Users/${theQuery}/${repo.name}`)}
      />
    </ListItem>
  );
}
