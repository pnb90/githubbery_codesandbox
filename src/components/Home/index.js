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
  const [emberStargazers, setEmberStargazers] = useState();
  const [emberWatchers, setEmberWatchers] = useState();
  const [vueStargazers, setVueStargazers] = useState();
  const [vueWatchers, setVueWatchers] = useState();



  useEffect(() => {
    axios
      .all([
        axios.get("https://api.github.com/repos/facebook/react", {
          headers: { Accept: "application/vnd.github.v3+json" }}),
        axios.get("https://api.github.com/repos/angular/angular.js", {
          headers: { Accept: "application/vnd.github.v3+json" }}),
        axios.get("https://api.github.com/repos/emberjs/ember.js", {
          headers: { Accept: "application/vnd.github.v3+json" }}),
        axios.get("https://api.github.com/repos/vuejs/vue", {
          headers: { Accept: "application/vnd.github.v3+json" }})
      ])
      .then(axios.spread((reactStats, angularStats, emberStats, vueStats) => {
        setReactStargazers(reactStats.data.stargazers_count)
        setAngularStargazers(angularStats.data.stargazers_count)
        setEmberStargazers(emberStats.data.stargazers_count)
        setVueStargazers(vueStats.data.stargazers_count)
        setReactWatchers(reactStats.data.watchers_count)
        setAngularWatchers(angularStats.data.watchers_count)
        setEmberWatchers(emberStats.data.watchers_count)
        setVueWatchers(vueStats.data.watchers_count)
      }))
  })    
  return (
    <div>
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
            <TableCell> {emberStargazers} </TableCell>
            <TableCell> {vueStargazers} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Watchers </TableCell>
            <TableCell> {reactWatchers} </TableCell>
            <TableCell> {angularWatchers} </TableCell>
            <TableCell> {emberWatchers} </TableCell>
            <TableCell> {vueWatchers} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Stars </TableCell>
            <TableCell> {reactWatchers} </TableCell>
            <TableCell> {angularWatchers} </TableCell>
            <TableCell> {emberWatchers} </TableCell>
            <TableCell> {vueWatchers} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Forks </TableCell>
            <TableCell> {reactWatchers} </TableCell>
            <TableCell> {angularWatchers} </TableCell>
            <TableCell> {emberWatchers} </TableCell>
            <TableCell> {vueWatchers} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Commits </TableCell>
            <TableCell> {reactWatchers} </TableCell>
            <TableCell> {angularWatchers} </TableCell>
            <TableCell> {emberWatchers} </TableCell>
            <TableCell> {vueWatchers} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Pull Requests </TableCell>
            <TableCell> {reactWatchers} </TableCell>
            <TableCell> {angularWatchers} </TableCell>
            <TableCell> {emberWatchers} </TableCell>
            <TableCell> {vueWatchers} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Issues </TableCell>
            <TableCell> {reactWatchers} </TableCell>
            <TableCell> {angularWatchers} </TableCell>
            <TableCell> {emberWatchers} </TableCell>
            <TableCell> {vueWatchers} </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Home;
