/*
Author: Aundrea Johnston
Date:July 15 2023
*/

"use strict";

//import module for making http requests
const axios = require('axios');

//import pusherpush notifications
//import * as PusherPushNotifications from "@pusher/push-notifications-web"; - ??
//const PusherPushNotifications = require("@pusher/push-notifications-web");


//link file
const jsonFile = 'https://restapifrontoffice.reservauto.net/api/v2/Vehicle/FreeFloatingAvailability?CityId=92&VehicleBodyTypes=&VehiclePropulsionTypes=&VehicleTypes=&VehicleTransmissionTypes=&VehicleTireTypes=&VehicleAccessories='

//call checkForCalls 
checkForCars();



function checkForCars()
{
//http request to retrieve file
axios.get(jsonFile)
.then(response => {
    const jsonData =(response.data);
     //get target element (TotalNbVehicles)
     const carsAvailable = jsonData.totalNbVehicles;

     // if TotalNbVehicles >= 1, sendNotification
     if (carsAvailable >= 0) {
       sendNotification(carsAvailable);
     }
     //else, repeat function
     else {
        checkForCars();
     }
   });
 }


function sendNotification()
{
//if cars are avaiable, notify 

}

