import React from 'react'
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Button } from "@material-ui/core";


const AsteroidID=() =>{
    const details = useSelector((state)=>{
        return state;
    })
    console.log('details0',details);
    return (
        <div>
         <List >
      <h2>Asteroid Id</h2>

      <ListItem>
        <ListItemText>Id:</ListItemText>
        <ListItemText>{details.id}</ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>Name:</ListItemText>
        <ListItemText>{details.name}</ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>Nasa Jpl URL:</ListItemText>
        <ListItemText >
          <Button
            variant="contained"
            type="submit"
            // className={classes.urlButton}
            onClick={() => window.open(`${details.nasa_jpl_url}`, "_blank")}
          >
            GO TO URL
          </Button>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>Is_potentially_hazardous_asteroid:</ListItemText>
        <ListItemText>
          {details.is_potentially_hazardous_asteroid ? (
            <Button variant="contained" >
              Hazardous
            </Button>
          ) : (
            <Button variant="contained" >
              Not Hazardous
            </Button>
          )}
        </ListItemText>
      </ListItem>
    </List>
        </div>
    )
}

export default AsteroidID
