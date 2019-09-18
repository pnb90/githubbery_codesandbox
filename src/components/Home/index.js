import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

function Home() {
  const [reactStargazers, setReactStargazers] = useState();
  const [reactWatchers, setReactWatchers] = useState();
  const [angularStargazers, setAngularStargazers] = useState();
  const [angularWatchers, setAngularWatchers] = useState();

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/facebook/react", {
        headers: { Accept: "application/vnd.github.v3+json" }
      })
      .then(response => {
        setReactStargazers(response.data.stargazers_count);
        setReactWatchers(response.data.watchers);
      });
  });

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/angular/angular.js", {
        headers: { Accept: "application/vnd.github.v3+json" }
      })
      .then(response => {
        setAngularStargazers(response.data.stargazers_count);
        setAngularWatchers(response.data.watchers);
      });
  });

  return (
    <div>
      Hey there
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>React</TableCell>
            <TableCell>Angular</TableCell>
            <TableCell>Ember</TableCell>
            <TableCell>Vue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell> Stargazers </TableCell>
            <TableCell> {reactStargazers} </TableCell>
            <TableCell> {angularStargazers} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Watchers </TableCell>
            <TableCell> {reactWatchers} </TableCell>
            <TableCell> {angularWatchers} </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Home;
