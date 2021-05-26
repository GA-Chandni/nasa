import React, { useState ,useEffect} from "react";
import { TextField, Button } from "@material-ui/core";
import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";
import {ActionForConfirmedID} from '../redux/action/actionForConfirmedID'
import {ActionForRandomID} from '../redux/action/actionForRandomID';

const SearchASteroidID = () => {
  const [asteroidID, setAsteroidID] = useState("");
  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [allAsteroid, setAllAsteroid] = useState([]);

  const dispatch = useDispatch();

  const SubmittedID = () => {
    if (asteroidID !== "") {
      dispatch(ActionForConfirmedID(asteroidID))
        .then((res) => {
          navigate("/astroid-details");
        })
        .catch((e) => {
          setError(true);
          setErrormsg("ENTER VALID ID ");
        });
    }
  };

  useEffect(() => {
    dispatch(ActionForRandomID())
      .then((res) => {
        setAllAsteroid(res.near_earth_objects);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const RandomID = async () => {
    const id = allAsteroid.map(({ id }) => id);
    const randomIndex = Math.ceil(
      Math.abs(getRandomArbitary(0, id.length - 1))
    );
    dispatch(ActionForConfirmedID(id[randomIndex]));
    navigate("/astroid-details");
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="text"
        value={asteroidID}
        name={asteroidID}
        onChange={(e) => setAsteroidID(e.target.value)}
      />
      <div>{error && <div>{errormsg}</div>}</div>
      <div>
        <Button
          variant="contained"
          color="primary"
          disabled={asteroidID === "" || asteroidID.length < 3}
          onClick={SubmittedID}
        >
          Search ID
        </Button>
        <Button variant="contained" color="secondary" onClick={RandomID}>
        Random ID
        </Button>
      </div>
    </div>
  );
};

export default SearchASteroidID;
