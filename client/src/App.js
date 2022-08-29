import logo from './logo.svg';
import './App.css';
import {  Route, Switch, withRouter } from 'react-router-dom';
import {useEffect, useState} from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import UserForm from './components/userForm';
import League from './components/Leagues';
import NewUser from './components/newUserForm';
import Volleyball from './components/Volleyball';
import Football from './components/Football';
import Soccer from './components/Soccer';
import Basketball from './components/Basketball';
import Baseball from './components/Baseball';
import Bowling from './components/Bowling';
import Login from './components/Login';

import User from './components/User';
// import LeaguesContainer from './containers/LeaguesContainer';


function App({history}) {
  const [leagueData, setLeagueData] = useState([])
  const [signupData, setSignupData] = useState([])
  const [teamData, setTeamData] = useState([])
  const [userTeamData, setUserTeamData] = useState([])
  const [userData, setUserData] = useState([])
  const [userDataForLogin, setUserDataForLogin] = useState([])
  const [currentUser, setCurrentUser] = useState("")
  

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then((data) => setUserData(data))
       // console.log(data)
    }, []);

    function addNewUser(newUser){
      setUserData([newUser, ...userData]);
      fetch("/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUser)
      });
    }
    // function deleteUser(id){
    //   console.log(id);
    //   setUserData((previousUser) =>  {
    //     const filteredUserById = previousUser.filter(
    //       (user) => user.id !== id
    //     );
    //     return filteredUserById
    //   })
    // }

    // useEffect(() => {
    //   fetch("http://localhost:3001/league")
    //   .then((res) => res.json())
    //   .then((fetchedData) => {
    //     console.log("leagues:", fetchedData);
    //     setLeagueData(fetchedData);
    //   })
    // }, []);

    // function deleteLeague(id) {
    //   console.log(id);
    //   setLeagueData((previousLeague) => {
    //     const filteredLeagueById = previousLeague.filter(
    //       (league) => league.id !== id
    //     );
    //     return filteredLeagueById
    //   })
    // }

    // useEffect(() => {
    //   fetch("http://localhost:3000/signups")
    //   .then((res) => res.json())
    //   .then((fetchedData) => {
    //     console.log("signup:", fetchedData);
    //     setSignupData(fetchedData);
    //   });
    // }, []);
    // function addNewSignup(newSignup){
    //   setSignupData([newSignup, ...signupData]);

    //   fetch("http://localhost:3000/signups", {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json" },
    //     body: JSON.stringify(newSignup),
    //   });
    // }
    // function deleteSignup(id) {
    //   console.log(id);
    //   setSignupData((previousSignup) => {
    //     const filteredSignupById = previousSignup.filter(
    //       (signup) => signup.id !== id
    //     );
    //     return filteredSignupById
    //   });
    // }
  //   useEffect(() => {
  //     fetch("http://localhost:3000/teams")
  //     .then(res => res.json())
  //     .then((fetchedData) => {
  //       console.log("team:", fetchedData);
  //       setTeamData(fetchedData);
  //     });
  //   }, []);
    
  // function addNewTeam(newTeam) {
  //   setTeamData([newTeam, ...teamData]);

  //   fetch("http://localhost:3000/teams", {
  //     method: "POST",
  //     headers: {"Content-Type":"application/json"},
  //     body: JSON.stringify(newTeam),
  //   });
  // }
  useEffect(() => {
    fetch("/teams")
    .then(res => res.json())
    .then(data => setTeamData(data))
  },[])
  function addNewTeam(newTeam) {
    setTeamData([newTeam, ...teamData]);
  fetch("/teams",{
    method:"POST",
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(newTeam)
})
  }

  const updateUser = (user) => setCurrentUser(user)

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if(res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        })
        .then(<Route exact path='/'/>);
      }
    }
  )
},[])
  
        if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (<>
  <NavBar //functionToAddNewUser={addNewUser}
    //functiontoAddNewSignup={addNewSignup}
    />

  <Switch>
  
  <Route exact path="/league/1"> 
  <section className="layout"><Volleyball teamsToMap={teamData}/></section> 
  </Route>

  <Route exact path="/league/2">
    <section className="layout"><Football teamsToMap={teamData} /> </section>
  </Route>

  <Route exact path="/league/3">
    <section className="layout"><Soccer teamsToMap={teamData}/> </section>
  </Route>

  <Route exact path="/league/4">
    <section className="layout"> <Basketball teamsToMap={teamData}/> </section>
  </Route>

  <Route exact path="/league/5">
    <section className="layout"> <Baseball teamsToMap={teamData}/> </section>
  </Route>

  <Route exact path="/league/6">
    <section className="layout"><Bowling teamsToMap={teamData}/> </section>
  </Route>

  <Route exact path="/users">
    <section> <User updateUser={updateUser}/> </section>
  </Route>

  <Route exact path="/create">
    <section> <NewUser sendUserData={userData}/> </section>
  </Route>

  <Route exact path="/login">
    <section> <Login sendLogin={userData} updateUser={updateUser}/></section>
  </Route>

  <Route exact path="/">
  <Home/>
  </Route>
  </Switch>
  
  </>);
}

export default App;
