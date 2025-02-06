import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import Autosuggest from "react-autosuggest";
import { MDBInput } from "mdb-react-ui-kit";
import { TranslationContext } from "../../contextapi/translationContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { MDBCheckbox, MDBRadio } from "mdb-react-ui-kit";
import axios from "axios";
import { FormContext } from "../../contextapi/formContext";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

import MapComponent from "./map";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";
import DiscountLogo from '../../assets/logo/Capturesdf-removebg-preview.png'
import DiscountLogobr from '../../assets/logo/right-removebg-preview.png'
import DiscountLogobl from '../../assets/logo/left-removebg-preview.png'

<MapComponent />;
const Payment = ({ selectedCard, initialState }) => {
  const { language } = useContext(TranslationContext);
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);
  const [distanceInfo, setDistanceInfo] = useState(null);
  const [showRouteInfo, setShowRouteInfo] = useState(false);
  const [stops, setStops] = useState([]);
  const [stopSuggestions, setStopSuggestions] = useState([[]]); //
  const location = useLocation();
  const { cardId, hourlyRate } = location.state || {};
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  

const handleTimeCalendarOpen = () => {
  setIsTimeCalendarOpen(true);
  setIsCalendarOpen(false); // Ensure the other field stays closed
};

const handleDateCalendarOpen = () => {
  setIsCalendarOpen(true);
  setIsTimeCalendarOpen(false); // Ensure the other field stays closed
};

  // Handle transition end
  const handleTransitionEnd = () => {
    setIsTransitionComplete(true); // Set state to true when the transition ends
  };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    pickupDate: null,
    pickupTime:null,
    numberOfPersons: "",
    pickupLocation: initialState.pickup || "",
    dropOffLocation: initialState.dropoff || "",
    luggageQuantity: "",
    checkbox: false,
    terms: false, // Added for terms acceptance
    ageOfChild: null, // Added for child age
    numberofchild: "", // Added for number of children
    bookingType: "", // Added to track payment type
    numberOfhours: null,
    stops: [""],
    viewMoreDetails: false,
    description: "",
    calculatedPrice:"",
    terms:false,
    hourly:false,
    paymentOption1:false,
    paymentOption2:false,
    terminal1:"",
    
  });

  


  useEffect(() => {
    if (hourlyRate) {
      setFormData((prevData) => ({
        ...prevData,
        hourly: true, // Set checkbox to checked if hourlyRate is available
      }));
      setIsHourlyChecked(true); // Also set internal state if needed
    }
  }, [hourlyRate]); // This effect runs when hourlyRate chan

  const isPickupEditable = !initialState.pickup;
  const isDropoffEditable = !initialState.dropoff;

  const [isTimeCalendarOpen, setIsTimeCalendarOpen] = useState(false);

  const [errors, setErrors] = useState({});
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropOffSuggestions, setDropOffSuggestions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isHourlyChecked, setIsHourlyChecked] = useState(false);
  const { setFormDataContext } = useContext(FormContext);

  // Calculate distance between two locations
  const calculateDistance = async (origin, destination, stops = []) => {
    if (!Array.isArray(stops)) {
      console.error("Stops is not an array:", stops);
      stops = []; // Default to an empty array
    }

    const allStops = [origin, ...stops, destination].filter(Boolean);
    if (allStops.length < 1) {
      setShowRouteInfo(false);
      return;
    }

    try {
      // Log the parameters being sent to the API
      console.log("Params being sent to API:", {
        origins: origin,
        destinations: destination,
        stops: stops.join("|") || "",
      });

      const response = await axios.get("https://nijaga8856.pythonanywhere.com/transfers/distance", {
        params: {
          origins: origin,
          destinations: destination,
          stops: stops.join("|") || "",
        },
      });

      if (!response?.data) {
        
      }

      const info = {
        distance: response.data.distance,
        duration: response.data.duration,
        status: response.data.milan,
        premium: response.data.premium,
        default: response.data.default,
        airport: response.data.airport,
        custom_ride: response.data.custom_ride
      };

      setDistanceInfo(info);
      setShowRouteInfo(true);
      return info;
    } catch (error) {
      const errorMessage =
      error.response?.data?.error || "An unexpected error occurred while calculating the distance.";
    const errorDetails = error.response?.data?.details ? `\n\n${error.response.data.details}` : "";

    console.error("API Error:", errorMessage, errorDetails);

    Swal.fire({
      title: "Service Alert",
      text: `${errorMessage}${errorDetails}`,
      icon: "warning",
      confirmButtonText: "OK",
      iconColor: "#05021f",
      confirmButtonColor: "#05021f",
      customClass: {
        popup: "swal-popup-custom",
        confirmButton: "swal-button-custom",
      },
    });

    // Clear pickup and dropoff locations on error
    setFormData((prevData) => ({
      ...prevData,
      pickupLocation: "",
      dropOffLocation: "",
    }));
      setDistanceInfo(null);
      setShowRouteInfo(false);
      
    }
  };

  // Effect to trigger when pickup or dropOff changes
  useEffect(() => {
    if (initialState?.pickup && initialState?.dropoff) {
      

      calculateDistance(initialState?.pickup, initialState?.dropoff);
    }
  }, []); // Empty dependency array to run once on component mount

  const validateForm = () => {
    const errorMessages = [];

    if (!formData.fullName.trim()) {
      errorMessages.push("Full name is required");
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      // Regular expression to allow only letters and spaces
      errorMessages.push("Full name can only contain letters and spaces");
    }

    if (!formData.email.trim()) {
      errorMessages.push("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorMessages.push("Email is invalid");
    }

    if (!formData.contact.trim()) {
      errorMessages.push("Contact number is required");
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.contact)) {
      errorMessages.push("Invalid contact number");
    }

    if (!formData.pickupDate) {
      errorMessages.push("Pickup date is required");
    }

    if (formData.numberOfPersons.trim()) {
      // Only validate if the field is not empty
      if (!/^[1-7]$/.test(formData.numberOfPersons.trim())) {
        // Regex to allow numbers between 1 and 7
        errorMessages.push("Number of persons must be between 1 and 7");
      }
    }
    

    if (!formData.pickupLocation.trim()) {
      errorMessages.push("Pickup location is required");
    }

    if (!formData.pickupLocation.trim()) {
      errorMessages.push("Pickup location is required");
    }
    
    // Validate pickup time
    if (formData.pickupTime) {
      const [hours, minutes] = formData.pickupTime.split(":").map(Number); // Split time into hours and minutes
    
      // Check if hours and minutes are within valid ranges
      if (hours < 0 || hours > 23) {
        errorMessages.push("Pickup time hours must be between 0 and 23");
      }
    
      if (minutes < 0 || minutes > 59) {
        errorMessages.push("Pickup time minutes must be between 0 and 59");
      }
    
      // Get the current time
      const currentTime = new Date();
      
      // Check if pickupDate is today
      const pickupDate = new Date(formData.pickupDate);
      const isPickupDateToday = pickupDate.toDateString() === currentTime.toDateString();
    
      const pickupTime = new Date(currentTime);
      pickupTime.setHours(hours, minutes, 0, 0); // Set the pickup time from input
      
      // If the pickup date is today, check the 10-minute condition
      if (isPickupDateToday) {
        const timeDifference = pickupTime - currentTime;
        if (timeDifference < 10 * 60 * 1000) { // 10 minutes in milliseconds
          errorMessages.push("Pickup time must be at least 10 minutes from the current time");
        }
      }
    
    } else {
      errorMessages.push("Pickup time is required");
    }
    
    


    if (formData.luggageQuantity === "") {
      // Set luggageQuantity to null if it's empty
      formData.luggageQuantity = null;
    }



    if (!formData.hourly && !formData.dropOffLocation.trim()) {
      errorMessages.push("Dropoff location is required");
    }

    
    if (formData.pickupTime) {
      const [hours, minutes] = formData.pickupTime.split(":").map(Number);
      if (hours < 0 || hours > 23) {
        errorMessages.push("Pickup time hours must be between 0 and 23");
      }
      if (minutes < 0 || minutes > 59) {
        errorMessages.push("Pickup time minutes must be between 0 and 59");
      }
    } else {
      errorMessages.push("Pickup time is required");
    }

    if (formData.hourly && (!formData.numberOfhours?.trim() || isNaN(formData.numberOfhours) || formData.numberOfhours <= 0)) {
      errorMessages.push("Please enter a valid number of hours");
    }
    

      // Now, we only validate the terminal selection if distanceInfo?.airport is true
     // Assuming formData and distanceInfo are already defined and populated
if (distanceInfo?.airport === true && !formData.terminal1) {
  errorMessages.push("Please provide your flight number");
}



if (checkTrainStation(formData)) {  // Only check when checkTrainStation is true
  if (!formData.trainNumber?.trim()) {
    errorMessages.push(
      language === "en" ? "Please provide your train number" :
      language === "it" ? "Si prega di fornire il numero del treno" :
      language === "fr" ? "Veuillez fournir votre numéro de train" :
      language === "du" ? "Bitte geben Sie Ihre Zugnummer an" :
      "Please provide your train number"
    );
  }
}




  // if (!formData.description.trim()) {
  //   errorMessages.push("Description is required");
  // }




    // if (!formData.ageOfChild.trim()) {
    //   errorMessages.push("Age of child is required");
    // } else if (!/^(?:[1-9]|1[0-2])$/.test(formData.ageOfChild.trim())) {
    //   // Regex to allow only numbers from 1 to 12
    //   errorMessages.push("Age of child cannot be more than 12 years");
    // }

    if (errorMessages.length > 0) {
      // Show only the first error message
      Swal.fire({
        icon: "error",
        title:
          language === "en"
            ? "Incomplete Fields"
            : language === "it"
            ? "Campi Incompleti"
            : language === "fr"
            ? "Champs Incomplets"
            : language === "du"
            ? "Ingevulde Velden"
            : "Incomplete Fields",

        text: errorMessages[0], // Show the first error message
        iconColor: "#05021f",
        confirmButtonColor: "#05021f",
        customClass: {
          popup: "swal-popup-custom",
          confirmButton: "swal-button-custom",
        },
        confirmButtonText:
          language === "en"
            ? "Ok"
            : language === "it"
            ? "Ok"
            : language === "fr"
            ? "D'accord"
            : language === "du"
            ? "Ok"
            : "Ok",
      });

      return false;
    }

    return true;
  };

  let debounceTimeout; // Declare debounce timeout globally or within the appropriate scope

  // useEffect(() => {
  //   // Reset numberOfhours if distance changes and it is pre-filled
  //   if (formData.numberOfhours) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       numberOfhours: null,
  //     }));
  //   }
  // }, [formData.pickupLocation, formData.dropOffLocation, formData.stops]); // Trigger effect when these values change
  
  let validationTimeout; // Declare a global timeout variable

  const [resultMessage, setResultMessage] = useState('');



  const handleInputChange = (e) => {
    const { name, checked, value, type } = e.target;

    // Update form data directly for all inputs
    setFormData((prev) => {
        const newFormData = {
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        };

        // Check if the new form data matches the stations
        const matchFound = checkTrainStation(newFormData);

        if (matchFound) {
            setResultMessage('Train station match found! Train === "true"');
            console.log('Train station match found: Train === "true"');
        } else {
            setResultMessage('No match found for the entered locations.');
            console.log('No match found: Train === "false"');
        }

        return newFormData;
    });
};

const stations = [
  "Roma Termini, Piazza dei Cinquecento, Roma, Metropolitan City of Rome Capital, Italy",
  "Roma Termini, Via Giovanni Giolitti, Rome, Metropolitan City of Rome Capital, Italy",
  "Termini Station Spacious Room, Via degli Equi, Roma, Metropolitan City of Rome Capital, Italy",
  "Termini Station Rooms, Via Cavour, Roma, Metropolitan City of Rome Capital, Italy",
  "Termini Train Station, Piazza dei Cinquecento, Roma, Metropolitan City of Rome Capital, Italy",
  "Tiburtina, Circonvallazione Nomentana, Rome, Roma Metropolitan City of Rome Capital, Italy",
  "Tiburtina, Rome, Roma Metropolitan City of Rome Capital, Italy",
  "Roma Tiburtina Stazione Ferroviaria, Via Tiburtina, Rome, Metropolitan City of Rome Capital, Italy",
  "Roma Tiburtina, Piazzale della Stazione Tiburtina, Rome, Metropolitan City of Rome Capital, Italy",
  "Ostiense, Piazzale dei Partigiani, Rome, Roma Metropolitan City of Rome Capital, Italy",
  "Centrale FS, Piazza Duca d'Aosta, Milan, Metropolitan City of Milan, Italy",
  "Centrale, Milano, Metropolitan City of Milan, Italy",
  "Centrale, Via Fabio Filzi, Milan, Metropolitan City of Milan, Italy",
  "Porta Garibaldi, Milan, Metropolitan City of Milan, Italy",
  "Porta Garibaldi, Piazza XXV Aprile, Milan, Metropolitan City of Milan, Italy",
  "Porta Garibaldi, Piazza Palestro, Catania, Metropolitan city of Catania, Italy",
  "Station Milano Cardona, Piazzale Cadorna, Milan, Metropolitan City of Milan, Italy",
  "Cadorna, Milan, Metropolitan City of Milan, Italy",
  "Piazzale Cadorna, Milan, Metropolitan City of Milan, Italy",
  "Santa Maria Novella, Firenze, Metropolitan City of Florence, Italy",
  "Santa Maria Novella, Piazza di Santa Maria Novella, Florence, Metropolitan City of Florence, Italy",
  "Stazione di Venezia Santa Lucia, Venezia, Metropolitan City of Venice, Italy",
  "Napoli Centrale, Piazza Giuseppe Garibaldi, Naples, Metropolitan City of Naples, Italy",
  "Torino Porta Nuova, Corso Vittorio Emanuele II, Turin, Metropolitan City of Turin, Italy",
  "Bologna Centrale, Piazza delle Medaglie d'Oro, Bologna, Metropolitan City of Bologna, Italy",
  "Piazza del Principe, Genova, Metropolitan City of Genoa, Italy",
  "Porta Nuova, Corso Porta Nuova, Verona, VR, Italy",
  "Centrale, Milan, Metropolitan City of Milan, Italy",
];

const normalizeStationName = (name) => {
  // Trim spaces and convert to lowercase for more consistent comparison
  return name.toLowerCase().trim();
};

const checkTrainStation = (formData) => {
  const pickupLocationNormalized = normalizeStationName(formData.pickupLocation);
  const dropOffLocationNormalized = normalizeStationName(formData.dropOffLocation);

  // Check if either normalized location matches a normalized station
  if (stations.some(station => normalizeStationName(station) === pickupLocationNormalized) ||
      stations.some(station => normalizeStationName(station) === dropOffLocationNormalized)) {
      return true;
  }
  return false;
};


  

  const handleDateChange = (date, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: date[0],
    }));
  };
  const navigate = useNavigate();


  // const formattedPickupDate = formData.pickupDate 
  // ? new Date(formData.pickupDate).toLocaleString() // Convert to a readable string
  // : "Unknown"; // Default value if no date is provided




  const handleSubmit = async (e) => {
    e.preventDefault();
  

    if (formData.hourly && formData.numberOfhours) {
      const recommendedHours = distanceInfo?.distance
        ? Math.floor(
            parseFloat(distanceInfo.distance.replace(/,/g, "").replace(" km", "")) / 15
          ) + 1
        : null;
  
      if (parseFloat(formData.numberOfhours) < recommendedHours) {
        Swal.fire({
          title: "Invalid Input",
          text: `Please enter at least ${recommendedHours} hours as recommended to proceed further.`,
          icon: "warning",
          confirmButtonText: "OK",
          iconColor: "#05021f",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        }).then(() => {
          // Clear the field after the alert is acknowledged
          setFormData((prev) => ({
            ...prev,
            numberOfhours: "", // Reset the field
          }));
        });
  
        return; // Prevent form submission if the validation fails
      }
    }



    if (!validateForm()) {
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      let distanceInfo = { distance: "Unknown", duration: "Unknown" };
  
      // Only calculate distance if dropOffLocation is provided
      if (formData.dropOffLocation) {
        distanceInfo = await calculateDistance(
          formData.pickupLocation,
          formData.dropOffLocation
        );
      }
  
      // Prepare data with child age and number - set to "none" if checkbox not selected
      const submissionData = {
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.contact,
        pick_up_location: formData.pickupLocation || "none",
        drop_off_location: formData.dropOffLocation || "none",
        number_of_persons: formData.numberOfPersons,
        luggage_quantity: formData.luggageQuantity,
        car: selectedCard.id,
        pickup_date: new Date(formData.pickupDate).toLocaleDateString("en-GB"),  // Convert to ISO string
  pickup_time: formData.pickupTime, // Convert to ISO string
        age_of_child: formData.ageOfChild || "none",
        number_of_childrens: formData.numberofchild || "none",
        payment_amount: calculatedPrice,
        distance: distanceInfo?.distance || "Unknown",
        estimated_duration: distanceInfo?.duration || "Unknown",
        need_a_child_seat: formData.checkbox,
        payment_type: formData.paymentOption1? "PayToDriver" : "PayNow",
        number_of_hours: parseInt(formData.numberOfhours, 10),
        stops_details: formData.stops,
        description: `${formData.description || ""} | Flight Number: ${formData.terminal1} |  TrainNumber: ${formData.trainNumber}`, // Append terminal info
      };
      
      setFormDataContext(submissionData);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/transfers/transfer-bookings`,
        submissionData
      );
  
      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        contact: "",
        pickupDate: null,
        numberOfPersons: "",
        pickupLocation: "",
        dropOffLocation: "",
        luggageQuantity: "",
        checkbox: false,
        ageOfChild: "",
        numberofchild: "",
      });
  
      if (formData.paymentOption1) {
        Swal.fire({
          icon: "success",
          title:
            language === "en"
              ? "Success!"
              : language === "it"
              ? "Successo!"
              : language === "fr"
              ? "Succès!"
              : language === "du"
              ? "Succes!"
              : "Success!",
      
          text:
            language === "en"
              ? "Thank You For Reaching Out, Our team will Get in touch with you Shortly!"
              : language === "it"
              ? "Grazie per averci contattato, il nostro team ti contatterà a breve!"
              : language === "fr"
              ? "Merci de nous avoir contacté, notre équipe vous contactera sous peu!"
              : language === "du"
              ? "Dank je voor het contact opnemen, ons team neemt binnenkort contact met je op!"
              : "Thank You For Reaching Out, Our team will Get in touch with you Shortly!",
      
          iconColor: "#05021f",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        });
      }
      // Conditionally navigate if payment is not to be made to the driver
      if (distanceInfo?.custom_ride === true) {
        Swal.fire({
          icon: "success",
          title:
            language === "en"
              ? "Success!"
              : language === "it"
              ? "Successo!"
              : language === "fr"
              ? "Succès!"
              : language === "du"
              ? "Succes!"
              : "Success!",
          text:
            language === "en"
              ? "Thank You For Reaching Out, Our team will Get in touch with you Shortly!"
              : language === "it"
              ? "Grazie per averci contattato, il nostro team ti contatterà a breve!"
              : language === "fr"
              ? "Merci de nous avoir contacté, notre équipe vous contactera sous peu!"
              : language === "du"
              ? "Dank je voor het contact opnemen, ons team neemt binnenkort contact met je op!"
              : "Thank You For Reaching Out, Our team will Get in touch with you Shortly!",
          iconColor: "#05021f",
          confirmButtonColor: "#05021f",
          customClass: {
            popup: "swal-popup-custom",
            confirmButton: "swal-button-custom",
          },
        }).then(() => {
          navigate("/"); // Navigate to '/' after the alert is dismissed
        });
      } else if (!formData.paymentOption1) {
        navigate("/stripePayment"); // Navigate to Stripe Payment page if no payment option is selected
      } else {
        navigate("/"); // Navigate to another page (e.g., confirmation page) if a payment option is selected
      }
      
      
    } catch (error) {
      console.error("Error submitting payment:", error);
      Swal.fire({
        icon: "error",
        title:
          language === "en"
            ? "Error!"
            : language === "it"
            ? "Errore!"
            : language === "fr"
            ? "Erreur!"
            : language === "du"
            ? "Fout!"
            : "Error!",
  
        text:
          language === "en"
            ? "Failed to submit information. Please try again later."
            : language === "it"
            ? "Impossibile inviare le informazioni. Riprova più tardi."
            : language === "fr"
            ? "Échec de l'envoi des informations. Veuillez réessayer plus tard."
            : language === "du"
            ? "Het verzenden van informatie is mislukt. Probeer het later opnieuw."
            : "Failed to submit information. Please try again later.",
  
        iconColor: "#05021f",
        confirmButtonColor: "#05021f",
        customClass: {
          popup: "swal-popup-custom",
          confirmButton: "swal-button-custom",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };








//   const ENCRYPTION_KEY = "4dFv&*Jk?L2pQr9dZt8mBs7W0#Xp$3Y6O1uT9kL";

// // XOR encryption function with safe encoding
// const xorEncrypt = (text, key) => {
//   let encryptedText = "";
//   for (let i = 0; i < text.length; i++) {
//     encryptedText += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
//   }
//   // Ensure encrypted text is safely encoded in Base64
//   const base64EncryptedText = btoa(unescape(encodeURIComponent(encryptedText)));
//   return base64EncryptedText;
// };


// const encryptData = (data) => {
//   const stringifiedData = JSON.stringify(data);
//   return xorEncrypt(stringifiedData, ENCRYPTION_KEY);
// };

// // Modified submit handler
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!validateForm()) {
//     return;
//   }

//   setIsSubmitting(true);

//   try {
//     // Create description string properly
//     const descriptionStr = [
//       formData.description || "",
//       `Flight Number: ${formData.terminal1 || ""}`,
//       `Train Number: ${formData.trainNumber || ""}`
//     ].filter(Boolean).join(" | ");
    

//     const submissionData = {
//       full_name: formData.fullName,
//       email: formData.email,
//       phone_number: formData.contact,
//       pick_up_location: formData.pickupLocation || "none",
//       drop_off_location: formData.dropOffLocation || "none",
//       number_of_persons: formData.numberOfPersons,
//       luggage_quantity: formData.luggageQuantity,
//       car: selectedCard.id,
//       pickup_date: new Date(formData.pickupDate).toISOString(),
//       pickup_time: formData.pickupTime,
//       age_of_child: formData.ageOfChild || "none",
//       number_of_childrens: formData.numberofchild || "none",
//       payment_amount: calculatedPrice,
//       distance: distanceInfo?.distance || "Unknown",
//       estimated_time: distanceInfo?.duration || "Unknown",
//       need_a_child_seat: formData.checkbox,
//       payment_type: formData.paymentOption1 ? "PayToDriver" : "PayNow",
//       number_of_hours: parseInt(formData.numberOfhours, 10) || 0,
//       stops_detail: formData.stops || "",
//       description: descriptionStr
//     };

//     // Encrypt the data
//     const encryptedData = encryptData(submissionData);

//     // Send encrypted data
//     // Send encrypted data with application/json content type
// const response = await axios.post(
//   `${process.env.REACT_APP_API_URL}/transfers/transfer-bookings`,
//   { data: encryptedData },  // Wrap encryptedData in an object
//   {
//     headers: {
//       'Content-Type': 'application/json'  // Correct content type for JSON data
//     }
//   }
// );

    

//     // Handle success
//     if (response.data) {
//       // Reset form
//       setFormData({
//         fullName: "",
//         email: "",
//         contact: "",
//         pickupDate: null,
//         numberOfPersons: "",
//         pickupLocation: "",
//         dropOffLocation: "",
//         luggageQuantity: "",
//         checkbox: false,
//         ageOfChild: "",
//         numberofchild: "",
//       });

//       Swal.fire({
//         icon: "success",
//         title: "Success!",
//         text: "Thank You For Reaching Out, Our team will Get in touch with you Shortly!",
//         iconColor: "#05021f",
//         confirmButtonColor: "#05021f",
//         customClass: {
//           popup: "swal-popup-custom",
//           confirmButton: "swal-button-custom",
//         },
//       });

//       if (!formData.paymentOption1) {
//         navigate("/stripePayment");
//       } else {
//         navigate("/");
//       }
//     }
//   } catch (error) {
//     console.error("Error submitting booking:", error);
//     Swal.fire({
//       icon: "error",
//       title: "Error!",
//       text: "Failed to submit booking. Please try again later.",
//       iconColor: "#05021f",
//       confirmButtonColor: "#05021f",
//       customClass: {
//         popup: "swal-popup-custom",
//         confirmButton: "swal-button-custom",
//       },
//     });
//   } finally {
//     setIsSubmitting(false);
//   }
// };




  
  
  
const fetchSuggestionspickup = async (value) => {
  if (!value) return [];

  const MILAN_COORDINATES = { latitude: 45.4642, longitude: 9.1900 }; // Milan's coordinates
  const RADIUS_KM = 150; // 50km radius
  const EARTH_RADIUS_KM = 6371; // Earth's radius in km

  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (angle) => (Math.PI * angle) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS_KM * c; // Distance in km
  };

  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/transfers/autocomplete/?input=${encodeURIComponent(value)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch suggestions");
    }

    const data = await response.json();

    const suggestions = data.predictions?.map((place) => {
      const latitude = place.coordinates?.lat;
      const longitude = place.coordinates?.lng;
      const distance = haversineDistance(
        MILAN_COORDINATES.latitude,
        MILAN_COORDINATES.longitude,
        latitude,
        longitude
      );

      return {
        description: place.description,
        latitude,
        longitude,
         // If outside 50km, mark as customRide
      };
    }) || [];
    setSuggestions(suggestions);

    // Log suggestions with `customRide` flag
    console.log("Suggestions with customRide flag: ", suggestions);

    return suggestions;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};


const handleSuggestionsFetchRequestedpickup = async ({ value }, field) => {
  const suggestions = await fetchSuggestionspickup(value);
  if (field === "pickupLocation") {
    setPickupSuggestions(suggestions);
  } 
};




  const fetchSuggestions = async (value) => {
    if (!value) return [];

    try {
      const response = await fetch(
        `${
          process.env.REACT_APP_API_URL
        }/transfers/autocomplete/?input=${encodeURIComponent(value)}`
      );

      if (!response.ok) {
        
      }

      const data = await response.json();
      return (
        data.predictions?.map((place) => ({
          description: place.description,
          latitude: place.latitude,
          longitude: place.longitude,
        })) || []
      );
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
    }
  };

  const handleSuggestionsFetchRequested = async ({ value }, field) => {
    const suggestions = await fetchSuggestions(value);
    if (field === "pickupLocation") {
      setPickupSuggestions(suggestions);
    } else if (field === "dropOffLocation") {
      setDropOffSuggestions(suggestions);
    }
  };

  const handleSuggestionSelected = async (event, { suggestion }, field) => {
    const { description } = suggestion;
    const updatedFormData = {
      ...formData,
      [field]: description,
    };

    setFormData(updatedFormData);

    // Calculate distance when both locations are set
    if (updatedFormData.pickupLocation && updatedFormData.dropOffLocation) {
      await calculateDistance(
        updatedFormData.pickupLocation,
        updatedFormData.dropOffLocation
      );
    }
  };


  const handleSuggestionSelectedpickup = async (event, { suggestion }, field) => {
    const { description } = suggestion;
    setSelectedSuggestion(suggestion);
  
    // Update the formData based on distanceInfo.custom_Ride
    const updatedFormData = {
      ...formData,
      [field]: description,
        // Apply condition based on distanceInfo.custom_Ride
    };
  
    setFormData(updatedFormData);
  
    // Calculate distance when both locations are set
    if (updatedFormData.pickupLocation && updatedFormData.dropOffLocation) {
      await calculateDistance(
        updatedFormData.pickupLocation,
        updatedFormData.dropOffLocation
      );
    }
  };
  


  const handleCalendarOpen = () => {
    setIsCalendarOpen(true); // Set state when the calendar is open
  };

  const handleCalendarClose = () => {
    setIsCalendarOpen(false); // Set state when the calendar is closed
  };
  const [paymentType, setPaymentType] = useState(null); // null means no selection
  const handleDropdownSelect = (type) => {
    setPaymentType(type); // Update the paymentType state
    setFormData((prevFormData) => ({
      ...prevFormData,
      bookingType: type, // Set the selected payment type to bookingType
    }));
  };

  const handleStopChange = (index, value) => {
    const updatedStops = [...formData.stops];
    updatedStops[index] = value; // Update the specific stop
    setFormData((prev) => ({
      ...prev,
      stops: updatedStops,
    }));
  };

  const handleStopSuggestionsFetchRequested = async ({ value }, index) => {
    const suggestions = await fetchSuggestions(value);
    const updatedStopSuggestions = [...stopSuggestions];
    updatedStopSuggestions[index] = suggestions;
    setStopSuggestions(updatedStopSuggestions);
  };

  const calculatedPrice = isHourlyChecked
  ? (() => {
      // If 'isHourlyChecked' is true, calculate price based on hours
      const basePrice = selectedCard.hourlyRate * (parseFloat(formData.numberOfhours) || 0);
      const price = basePrice.toFixed(2);
      
      // Ensure `premium` is treated as a boolean if needed
      const isPremium = Boolean(distanceInfo?.premium);
      
      // If distanceInfo?.premium is true, add 100 to the final price
      const finalPrice = isPremium ? (parseFloat(price) + 100).toFixed(2) : price;
      
      return `€${finalPrice}`;
      
    })()
  : (() => {
      // Check if any of the three specific prices are applicable
      // if (
      //   initialState.additionalNumber === 1 || 
      //   initialState.additionalNumber === 2 || 
      //   initialState.additionalNumber === 3
      // ) {
      //   // Return the corresponding price without calculating
      //   return `€${
      //     initialState.additionalNumber === 1
      //       ? selectedCard.malpenssatomilan
      //       : initialState.additionalNumber === 2
      //       ? selectedCard.malpenssatocomo
      //       : selectedCard.malpenssatobergamo
      //   }`;
      // }

      // If Milan is true, calculate price and ensure a minimum of €80
      if (distanceInfo?.status === true) {
        

        const distanceValue = parseFloat(distanceInfo.distance.replace(/,/g, "").replace(" km", ""));
        const pricePerKm = 2.7; // Define price per km for Milan routes
        const calculatedMilanPrice = distanceValue * pricePerKm;

        

        // Use €80 if calculated price is below €80, otherwise use calculated price
        const finalMilanPrice = Math.max(calculatedMilanPrice, 80);
        return `€${finalMilanPrice.toFixed(2)}`; // Return the final price
      }

      if (selectedCard.name === "Mercedes-Benz V-Class") {
        
        if (distanceInfo?.default === "default_1") {
          
          return `€180`;
        }
        
        if (distanceInfo?.default === "default_2") {
          
          return `€180`;
        }
        
        if (distanceInfo?.default === "default_3") {
          
          return `€240`;
        }
      
        
      }
      

      // Set prices for Mercedes-Benz E-Class
      if (selectedCard.name === 'Mercedes-Benz E-Class') {
        
        if (distanceInfo?.default === 'default_1') return `€170`;
        if (distanceInfo?.default === 'default_2') return `€170`;
        if (distanceInfo?.default === 'default_3') return `€220`;
      }

      if (selectedCard.name === 'Mercedes-Benz S-Class') {
        
        if (distanceInfo?.default === 'default_1') return `€240`;
        if (distanceInfo?.default === 'default_2') return `€240`;
        if (distanceInfo?.default === 'default_3') return `€300`;
      }







      // If 'premium' is true, set per km price to 2.9
      if (distanceInfo?.premium === true) {
        // Remove commas and parse the distance value
        const distanceValue = parseFloat(distanceInfo.distance.replace(/,/g, "").replace(" km", ""));
        
        const pricePerKm = 2.9; // Set price per km to 2.9 for premium routes
        let calculatedPremiumPrice = distanceValue * pricePerKm;
        
        // Add 100 to the calculated premium price
        calculatedPremiumPrice += 100;
    
        // Ensure the minimum price is €60
        const finalPremiumPrice = Math.max(calculatedPremiumPrice, 60);
        
        return `€${finalPremiumPrice.toFixed(2)}`; // Return the final price
    }
    
      
      

      // If distance is available and valid, calculate price based on distance
      if (distanceInfo?.distance && !isNaN(parseFloat(distanceInfo.distance))) {
        const distanceValue = parseFloat(distanceInfo.distance.replace(/,/g, "").replace(" km", ""));
        let pricePerKm = 2.7; // Default price per km
      
        // Apply different price based on the distance range
        if (distanceValue >= 100 && distanceValue < 200) {
          pricePerKm = 2.6; // Set price per km to 2.6 for distances between 100-200 km
        } else if (distanceValue >= 200 && distanceValue < 300) {
          pricePerKm = 2.5; // Set price per km to 2.5 for distances between 200-300 km
        } else if (distanceValue >= 300) {
          pricePerKm = 2.4; // Set price per km to 2.4 for distances over 300 km
        }
      
        // Calculate the final price ensuring a minimum price of €60
        const price = Math.max(distanceValue * pricePerKm, 60);
        
        return `€${price}`; // Return the calculated price with Euro symbol
      }
      

      // If no conditions match, return the default hourly rate price
      const fallbackPrice = (selectedCard.hourlyRate * (parseFloat(formData.numberOfhours) || 0)).toFixed(2);
      return `€${fallbackPrice}`;
    })();







  return (
    <div className="payment_form">
      <h3 className="transfer_service_heading_form">
        {language === "en"
          ? "Fill out the form and book your transfer"
          : language === "it"
          ? "Compila il modulo e prenota il tuo trasferimento"
          : language === "du"
          ? "Vul het formulier in en boek je transfer"
          : language === "fr"
          ? "Remplissez le formulaire et réservez votre transfert"
          : "Fill out the form and book your transfer"}
      </h3>

      <Form onSubmit={null} noValidate>
        <div className="last_div">
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <MDBInput
              label={
                language === "en"
                  ? "Number of Persons"
                  : language === "it"
                  ? "Numero di Persone"
                  : language === "du"
                  ? "Aantal Personen"
                  : language === "fr"
                  ? "Nombre de Personnes"
                  : "Number of Persons"
              }
             type="text"
              name="numberOfPersons"
              value={formData.numberOfPersons}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",
                color:"black",
                fontSize: "16px",
                padding: "10px",
              }}
            />
          </Form.Group> */}
          

          <Form.Group className="mb-3" controlId="formPickupDate">
            <div className="form-outline" style={{ position: "relative" }}>
              <label
                htmlFor="pickupDate"
                className={
                  formData.pickupDate || isCalendarOpen
                    ? "pickup-date-label-active"
                    : "pickup-date-label"
                }
                style={{
                  position: "absolute",
                  backgroundColor: "transparent",
                  top: formData.pickupDate || isCalendarOpen ? "-10px" : "50%",
                  left: "10px",
                  transform:
                    formData.pickupDate || isCalendarOpen
                      ? "none"
                      : "translateY(-50%)",
                  fontSize:
                    formData.pickupDate || isCalendarOpen ? "12px" : "16px",
                  color: isCalendarOpen ? "#3f51b5" : "#6c757d",
                  transition: "all 0.3s ease",
                  pointerEvents: "none",
                  padding: "0 5px",
                  zIndex: 1,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {language === "en"
  ? "Pickup Date"
  : language === "it"
  ? "Data di Ritiro"
  : language === "fr"
  ? "Date de Prise en Charge"
  : language === "du"
  ? "Ophaaldatum"
  : "Pickup Date"}
              </label>

              <Flatpickr
                className="form-control mobile_1"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={(date) => handleDateChange(date, "pickupDate")}
                options={{
                  dateFormat: "F j, Y", // Only Date format
                  minDate: "today",
                  disableMobile: true,
                  noCalendar: false,
                  time_24hr: false,
                  onOpen: handleDateCalendarOpen,
                  
                }}
                style={{
                  backgroundColor: "#f9f9f9",
                  border:
                    formData.pickupDate || isCalendarOpen
                      ? null
                      : "1px solid #bdbdbd",
                  borderRadius: "5px",
                  padding: "10px",
                  fontWeight: 400,
                  fontSize: "16px",
                  height: "45px",
                  color: "#495057",
                  outline: "none",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                  boxShadow: "none",
                }}
              />

              <div
                className="form-notch"
                style={{
                  display: "flex",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  maxWidth: "100%",
                  height: "100%",
                  textAlign: "left",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="form-notch-leading pickup-notch-leading"
                  style={{
                    border: formData.pickupDate || isCalendarOpen ? null : 0,
                    width: formData.pickupDate || isCalendarOpen ? ".5rem" : 0,
                  }}
                ></div>
                <div
                  className="form-notch-middle"
                  style={{
                    width: "75px",
                    borderTop:
                      formData.pickupDate || isCalendarOpen
                        ? "1px solid transparent"
                        : 0,
                    borderBottom:
                      formData.pickupDate || isCalendarOpen
                        ? "1px solid #bdbdbd"
                        : 0,
                  }}
                ></div>
                <div
                  className="form-notch-trailing"
                  style={{
                    border: formData.pickupDate || isCalendarOpen ? null : 0,
                  }}
                ></div>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPickupTime">
  
          <MDBInput
  label={
    language === "en"
      ? "Pickup Time"
      : language === "it"
      ? "Orario di Ritiro"
      : language === "du"
      ? "Ophaaltijd"
      : language === "fr"
      ? "Heure de Prise en Charge"
      : "Pickup Time"
  }
  type="text"
  name="pickupTime"
  value={formData.pickupTime}
  onChange={handleInputChange}
  onFocus={(e) => {
    if (e.target.value === "HH:MM") e.target.value = ""; // Clear the placeholder text on focus
  }}
  onBlur={(e) => {
    if (!e.target.value) e.target.placeholder = "HH:MM"; // Reset to placeholder if empty
  }}
  placeholder="HH:MM" // Initially shows "HH:MM" as a placeholder
  inputMode="numeric" // Ensures the keyboard type for mobile is numeric
  pattern="[0-9]*" // Allows only numeric input
  maxLength="5" // Limit input length to 5 (hh:mm)
  onInput={(e) => {
    let inputValue = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers

    // If the input has at least 2 digits and no colon, insert colon after 2 digits
    if (inputValue.length >= 2 && !inputValue.includes(":")) {
      inputValue = inputValue.slice(0, 2) + ":" + inputValue.slice(2);
    }

    // Split by colon and limit hours and minutes to 2 digits
    const parts = inputValue.split(":");

    if (parts.length > 1) {
      parts[1] = parts[1].slice(0, 2); // Limit minutes to 2 digits
    }
    if (parts.length > 0) {
      parts[0] = parts[0].slice(0, 2); // Limit hours to 2 digits
    }

    // Update the input field with the formatted value
    e.target.value = parts.join(":");

    // If the input length is less than 3 characters and contains a colon, remove the colon
    if (e.target.value.length < 3 && e.target.value.includes(":")) {
      e.target.value = e.target.value.slice(0, 2); // Remove the colon if only hours are left
    }
  }} // This handles input manipulation
  style={{
    backgroundColor: "#f9f9f9",
    border: "none",
    fontSize: "16px",
    padding: "10px",
    width: "100%",
  }}
/>







</Form.Group>




        </div>

        <div className="last_div1">
          <Form.Group className="mb-3 w-100" controlId="formPickupLocation">
            <Autosuggest
              suggestions={pickupSuggestions}
              onSuggestionsFetchRequested={(e) =>
                
                handleSuggestionsFetchRequestedpickup(e, "pickupLocation")
              }
              onSuggestionsClearRequested={() => setPickupSuggestions([])}
              getSuggestionValue={(suggestion) => suggestion.description}
              renderSuggestion={(suggestion) => (
                <div>{suggestion.description}</div>
              )}
              inputProps={{
                value: formData.pickupLocation,
                onChange: handleInputChange,
                name: "pickupLocation",
                label: language === "en"
  ? "Pickup Location"
  : language === "it"
  ? "Posizione di Prelievo"
  : language === "fr"
  ? "Lieu de Prise en Charge"
  : language === "du"
  ? "Ophaallocatie"
  : "Pickup Location", // Default case if none of the languages match

                className: "form-outline form-control",
                style: {
                  backgroundColor: "#f9f9f9",
                  border: "none",

                  fontSize: "16px",
                  padding: "10px",
                  width: "100%",
                  color: "black",
                  borderRadius: "10px",
                },
                // disabled: !isPickupEditable,
              }}
              onSuggestionSelected={(e, data) =>
                handleSuggestionSelectedpickup(e, data, "pickupLocation")
              }
              renderInputComponent={(inputProps) => (
                <MDBInput
                  {...inputProps}
                  className="form-outline form-control"
                />
              )}
              theme={{
                container: {
                  position: "relative",
                  zIndex: 9999999999999999999999999999999999999999999999999999,
                },
                suggestionsContainerOpen: {
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  maxHeight: "200px",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  zIndex: 999999999999999999999999999999999999999999999999999999999999999999999999999,
                },
                suggestion: {
                  padding: "10px",
                  cursor: "pointer",
                },
                suggestionHighlighted: {
                  backgroundColor: "#d3d3d3",
                },
              }}
              // disabled={!isPickupEditable}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formDropOffLocation">
            <Autosuggest
              suggestions={dropOffSuggestions}
              onSuggestionsFetchRequested={(e) =>
                handleSuggestionsFetchRequested(e, "dropOffLocation")
              }
              onSuggestionsClearRequested={() => setDropOffSuggestions([])}
              getSuggestionValue={(suggestion) => suggestion.description}
              renderSuggestion={(suggestion) => (
                <div>{suggestion.description}</div>
              )}
              onSuggestionSelected={(e, data) =>
                handleSuggestionSelected(e, data, "dropOffLocation")
              }
              inputProps={{
                value: formData.dropOffLocation,
                onChange: handleInputChange,
                name: "dropOffLocation",
                className: "form-outline form-control autosuggest_drop",
                type: "text",
                label: language === "en"
                ? "Drop Off Location"
                : language === "it"
                ? "Posizione di Rilascio"
                : language === "fr"
                ? "Lieu de Dépôt"
                : language === "du"
                ? "Afzetlocatie"
                : "Drop Off Location", 
                style: {
                  backgroundColor: "#f9f9f9",
                  color: "black",
                  fontSize: "16px",
                  padding: "10px",
                  width: "100%",

                  borderRadius: "10px",
                  border: "none",
                  
                },
                // disabled: !isDropoffEditable,
              }}
              renderInputComponent={(inputProps) => (
                <MDBInput
                  {...inputProps}
                  className="form-outline form-control autosuggest_drop"
                />
              )}
              theme={{
                container: {
                  position: "relative",
                  zIndex: 1050,
                },
                suggestionsContainerOpen: {
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  maxHeight: "200px",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  zIndex: 99999999999,
                },
                suggestion: {
                  padding: "10px",
                  cursor: "pointer",
                },
                suggestionHighlighted: {
                  backgroundColor: "#d3d3d3",
                },
              }}
              // disabled={!isDropoffEditable}
            />
          </Form.Group>
        </div>
        <div>
        {isHourlyChecked && (
  <div className={`hourly_text_container ${isHourlyChecked ? 'show' : 'hide'}`}>
    <p className="hourly_text_with_animation">
    Our Hourly service allows a maximum of 15 km per hour
    </p>
  </div>
)}
</div>



        <Form.Group className="hehejhhfdb">
  <div
    className="hello_1234567"
    style={{ gap: '5px' }}
    data-tip={
      language === "en"
        ? "Select whether the service is hourly"
        : language === "it"
        ? "Seleziona se il servizio è orario"
        : language === "fr"
        ? "Sélectionnez si le service est horaire"
        : language === "du"
        ? "Selecteer of de service per uur is"
        : "Select whether the service is hourly"
    } // Tooltip text
  >
    {/* Conditionally render the checkbox or input field */}
    
    <div className="width_100544">
      <MDBCheckbox
        className="sghdfjhs"
        id="termsCheckbox"
        name="hourly"
        checked={formData.hourly} // Bind checked state to formData.hourly
        onChange={handleInputChange}
        label={
          language === "en"
            ? "Hourly"
            : language === "it"
            ? "Orario"
            : language === "fr"
            ? "Horaire"
            : language === "du"
            ? "Uurwerk"
            : "Hourly"
        }
        onClick={() => setIsHourlyChecked(!isHourlyChecked)} // Toggle state on click
      />
    </div>

    {/* Conditionally render the input field if Hourly is checked */}
    <div
      className={`input-container ${isHourlyChecked ? 'show' : 'hide'}`}
      style={{ width: '100%' }} // Keep the width consistent
    >
      {isHourlyChecked && (
        <MDBInput
        
          label={
            language === "en"
              ? "Number of Hours"
              : language === "it"
              ? "Numero di Ore"
              : language === "fr"
              ? "Nombre d'Heures"
              : language === "du"
              ? "Aantal Uren"
              : "Number of Hours"
          }
          type="text"
          name="numberOfhours"
          value={formData.numberOfhours}
          onChange={handleInputChange}
          style={{
            backgroundColor: "#f9f9f9",
            border: "none",
            fontSize: "16px",
            padding: "10px",
            width: "100%", // Width remains constant
            height: "45px", // Fixed height
          }}
          placeholder={
            distanceInfo?.distance
              ? `Recommended Hours: ${Math.floor(parseFloat(distanceInfo.distance.replace(/,/g, "").replace(" km", "")) / 15) + 1}`
              : "Enter Number of Hours"
          }
        />
      )}
    </div>

    <ReactTooltip place="top" type="dark" effect="solid" />
  </div>
</Form.Group>



{distanceInfo?.airport === true && (
  <div className="payment_radio_details input-animate fade123-in-slide">
    <MDBInput
      label={
        language === "en"
          ? "Flight Number"
          : language === "it"
          ? "Numero del volo"
          : language === "fr"
          ? "Numéro de vol"
          : language === "du"
          ? "Flugnummer"
          : "Flight Number" // Default to English
      }
      
      id="terminal1"
      type="text"
      value={formData.terminal1}
      onChange={handleInputChange} // Handle change
      name="terminal1"
      style={{ backgroundColor: "#f9f9f9", height: "45px" }}
    />
  </div>
)}
{checkTrainStation(formData) && (
  <div className="payment_radio_details input-animate fade123-in-slide">
    <MDBInput
      label={
        language === "en"
          ? "Train Number"
          : language === "it"
          ? "Numero del treno"
          : language === "fr"
          ? "Numéro de train"
          : language === "du"
          ? "Zugnummer"
          : "Train Number" // Default to English
      }
      id="trainNumber"
      type="text"
      value={formData.trainNumber}  // Assume you have a field for train number in the formData
      onChange={handleInputChange} // Handle change
      name="trainNumber"
      style={{ backgroundColor: "#f9f9f9", height: "45px" }}
    />
  </div>
)}






        <div className="name_email_text">
          <Form.Group className="mb-3 all_form_final" controlId="formBasicEmail">
            <MDBInput
              label={
                language === "en"
                  ? "Full Name"
                  : language === "it"
                  ? "Nome completo"
                  : language === "du"
                  ? "Volledige naam"
                  : language === "fr"
                  ? "Nom complet"
                  : "Full Name"
              }
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",

                fontSize: "16px",
                padding: "10px",
                width:"100%"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
            <MDBInput
              label={
                language === "en"
                  ? "Email Address"
                  : language === "it"
                  ? "Indirizzo email"
                  : language === "du"
                  ? "E-mail adres"
                  : language === "fr"
                  ? "Adresse e-mail"
                  : "Email Address"
              }
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",

                fontSize: "16px",
                padding: "10px",
              }}
            />
          </Form.Group>
        </div>
        <div className="name_email_text2">
          <Form.Group className="" controlId="formBasicEmail">
            <MDBInput
              label={
                language === "en"
                  ? "Enter Your Phone Number"
                  : language === "it"
                  ? "Inserisci il tuo numero di telefono"
                  : language === "du"
                  ? "Voer je telefoonnummer in"
                  : language === "fr"
                  ? "Entrez votre numéro de téléphone"
                  : "Enter Your Phone Number"
              }
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",
                fontSize: "16px",
                padding: "10px",
              }}
            />
          </Form.Group>

          
        </div>

<Form.Group className="mb-3 final_check">
          <MDBCheckbox
            label={language === "en"
              ? "Add More Details"
              : language === "it"
              ? "Aggiungi altri dettagli"
              : language === "fr"
              ? "Ajouter plus de détails"
              : language === "du"
              ? "Voeg meer details toe"
              : "Add More Details"}
            
            name="viewMoreDetails" // use 'viewMoreDetails' here
            checked={formData.viewMoreDetails}
            onChange={handleInputChange}
            style={{
              fontWeight: 600,
              fontSize: "16px",
            }}
          />
        </Form.Group>

        {formData.viewMoreDetails && (
          <div
            className={`content-transition ${
              formData.viewMoreDetails ? "open" : ""
            }`}
          >
            <Form.Group className="mb-3">
              {formData.stops.map((stop, index) => (
                <Autosuggest
                  key={index}
                  suggestions={stopSuggestions[index] || []}
                  onSuggestionsFetchRequested={(e) =>
                    handleStopSuggestionsFetchRequested(e, index)
                  }
                  onSuggestionsClearRequested={() => {
                    const updatedSuggestions = [...stopSuggestions];
                    updatedSuggestions[index] = [];
                    setStopSuggestions(updatedSuggestions);
                  }}
                  getSuggestionValue={(suggestion) => suggestion.description}
                  renderSuggestion={(suggestion) => (
                    <div>{suggestion.description}</div>
                  )}
                  inputProps={{
                    placeholder: ` Add Stop Number ${index +1}`,
                    value: stop,
                    onChange: (e) => handleStopChange(index, e.target.value),
                    name: `stop_${index}`,
                    className: "form-outline form-control",
                    style: {
                      backgroundColor: "#f9f9f9",
                      border: "1px solid #bdbdbd",
                      fontSize: "16px",
                      padding: "10px",
                      width: "100%",
                      color: "black",
                      borderRadius: "5px",
                      marginBottom:'10px'
                    },
                  }}
                  onSuggestionSelected={(e, data) => {
                    const updatedStops = [...formData.stops];
                    updatedStops[index] = data.suggestion.description;
                    setFormData((prev) => {
                      calculateDistance(
                        prev.pickupLocation,
                        prev.dropOffLocation,
                        updatedStops
                      );
                      return { ...prev, stops: updatedStops };
                    });
                  }}
                />
              ))}
              <div className="mt-2">
                <button
                className="add-stop-button"
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    setFormData((prev) => ({
                      ...prev,
                      stops: [...prev.stops, ""],
                    }));
                  }}
                >
                  Add Stop
                </button>
                {formData.stops.length > 1 && (
                  <button
                    variant="danger"
                    className="ms-2 remove-stop-button"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormData((prev) => ({
                        ...prev,
                        stops: prev.stops.slice(0, -1),
                      }));
                    }}
                  >
                    Remove Stop
                  </button>
                )}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <MDBInput
                label={
                  language === "en"
                    ? "Luggage Quantity"
                    : language === "it"
                    ? "Quantità di Bagagli"
                    : language === "fr"
                    ? "Quantité de Bagages"
                    : language === "du"
                    ? "Bagagehoeveelheid"
                    : "Luggage Quantity"
                }
                type="text"
                name="luggageQuantity"
                value={formData.luggageQuantity}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "none",
                  color: "black",
                  fontSize: "16px",
                  padding: "10px",
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 checkbox_margin_left"
              controlId="formBasicEmail"
            >
              <MDBCheckbox
                label={
                  language === "en"
                    ? "Need a Child Seat?"
                    : language === "it"
                    ? "Hai bisogno di un seggiolino per bambini?"
                    : language === "fr"
                    ? "Avez-vous besoin d'un siège pour enfant ?"
                    : language === "du"
                    ? "Heeft u een kinderstoel nodig?"
                    : "Need a Child Seat?"
                }
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleInputChange}
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              />
            </Form.Group>

            <div
              className={`child-seat-container ${
                formData.checkbox ? "show" : ""
              }`}
            >
              {formData.checkbox && (
                <MDBInput
                  label={
                    language === "en"
                      ? "Age of Child"
                      : language === "it"
                      ? "Età del Bambino"
                      : language === "fr"
                      ? "Âge de l'Enfant"
                      : language === "du"
                      ? "Leeftijd van het Kind"
                      : "Age of Child"
                  }
                  type="text"
                  name="ageOfChild"
                  value={formData.ageOfChild}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "#f9f9f9",
                    border: "none",
                    color: "black",
                    fontSize: "16px",
                    padding: "10px",
                    marginBottom: "17px",
                    marginTop: "6px",
                  }}
                />
              )}
              {formData.checkbox && (
                <MDBInput
                  label={
                    language === "en"
                      ? "Number of Child"
                      : language === "it"
                      ? "Numero di Bambini"
                      : language === "fr"
                      ? "Nombre d'Enfants"
                      : language === "du"
                      ? "Aantal Kinderen"
                      : "Number of Child"
                  }
                  type="text"
                  name="numberofchild"
                  value={formData.numberofchild}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "#f9f9f9",
                    border: "none",
                    color: "black",
                    fontSize: "16px",
                    padding: "10px",
                    marginBottom: "17px",
                  }}
                />
              )}
            </div>

            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <MDBInput
                label={language === "en"
                  ? "Number of Persons"
                  : language === "it"
                  ? "Numero di Persone"
                  : language === "fr"
                  ? "Nombre de Personnes"
                  : language === "du"
                  ? "Aantal Personen"
                  : "Number of Persons"}
                
                type="text"
                name="numberOfPersons"
                value={formData.numberOfPersons}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "none",
                  color: "black",
                  fontSize: "16px",
                  padding: "10px",
                }}
              />
            </Form.Group>
          </div>
        )}




        
<Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              <MDBInput
                label={language === "en"
                  ? "Description"
                  : language === "it"
                  ? "Descrizione"
                  : language === "fr"
                  ? "Description"
                  : language === "du"
                  ? "Beschrijving"
                  : "Description"}
                
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "none",
                  color: "black",
                  fontSize: "16px",
                  padding: "10px",
                }}
              />
            </Form.Group>


            {!isHourlyChecked &&
          formData.pickupLocation &&
          formData.dropOffLocation && (
            <div>
              <MDBCard
                className=""
                style={{
                  marginTop: "15px",
                  display: "block",
                  backgroundColor: "rgb(249, 249, 249)",
                  marginBottom: "30px",
                  border: "1px solid",
                  borderColor: "#bdbdbd",
                  borderRadius: "5px",
                }}
              >
                <MDBCardHeader
                  className="text"
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: "22px",
                  }}
                >
                  {language === "en"
                    ? "Route Information"
                    : language === "it"
                    ? "Informazioni sul percorso"
                    : language === "fr"
                    ? "Informations sur l'itinéraire"
                    : language === "du"
                    ? "Route-informatie"
                    : "Route Information"}
                </MDBCardHeader>
                <MapComponent
  origin={formData.pickupLocation}
  destination={formData.dropOffLocation}
  stops={formData.stops} // Passing the stops data here
  hourly={formData.hourly} // Adding the hourly data
/>

                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>
                        {language === "en"
                          ? "Distance"
                          : language === "it"
                          ? "Distanza"
                          : language === "fr"
                          ? "Distance"
                          : language === "du"
                          ? "Afstand"
                          : "Distance"}
                      </strong>
                      <span style={{ fontWeight: 700 }}>
                        {" "}
                        {distanceInfo?.distance || "N/A"}
                      </span>
                    </div>
                    <div>
                      <strong>
                      {language === "en"
  ? "Transit Time"
  : language === "it"
  ? "Tempo di Transito"
  : language === "fr"
  ? "Temps de Transit"
  : language === "du"
  ? "Transit Tijd"
  : "Transit Time"}

                      </strong>
                      <span style={{ fontWeight: 700 }}>
                        {" "}
                        {distanceInfo?.duration || "N/A"}
                      </span>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          )}



        
        
{!distanceInfo?.custom_ride === true && (
  <Form.Group
    className="mb-3"
    controlId="formBasicEmail"
    style={{ width: "100%" }}
  >
    {/* <MDBInput
  type="number"
  name="Amount"
  placeholder={`Price: €${(Number(calculatedPrice.replace('€', '').trim()) || 0) * 1.2} Fashion week Discount 20%`}
  value={calculatedPrice}
  readOnly
  
  className="price-input"
/> */}
<div className="promo-card">
  <div className="promo-card-content">
    <h2 className="promo-heading">
    Price!
    </h2>
    <div className="promo-prices">
  <span className="original-price">
    €{((Number(calculatedPrice.replace('€', '').trim()) || 0) * 1.2).toFixed(2)}
  </span>
  
  {/* Arrow between prices */}
  <span className="arrow-icon">→</span>

  <span className="discount-price">
    {calculatedPrice}
  </span>
</div>
  </div>
</div>




  </Form.Group>
)}
        <div className="">
          <MDBCard className="" alignment="center">
            {/* <MDBCardHeader
              style={{
                textAlign: "left",
                paddingLeft: "30px",
                fontWeight: "700",
              }}
            >
              {language === "en"
                ? "Terms & Conditions"
                : language === "it"
                ? "Termini e Condizioni"
                : language === "fr"
                ? "Termes et Conditions"
                : language === "du"
                ? "Voorwaarden"
                : "Terms & Conditions"}
            </MDBCardHeader> */}
            <MDBCardBody className="card-accept">
              {/* <MDBCardText>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "20px",
                    textAlign: "left",
                  }}
                >
                  <ul>
                    <li>
                      {language === "en"
                        ? "The minimum fare for a transfer is 60 euros. All rides within the city of Milan are charged at a flat rate of 80 euros."
                        : language === "it"
                        ? "La tariffa minima per un trasferimento è di 60 euro. Tutti i viaggi all'interno della città di Milano sono addebitati a una tariffa fissa di 80 euro."
                        : language === "fr"
                        ? "Le tarif minimum pour un transfert est de 60 euros. Tous les trajets dans la ville de Milan sont facturés à un tarif forfaitaire de 80 euros."
                        : language === "du"
                        ? "Het minimale tarief voor een transfer is 60 euro. Alle ritten binnen de stad Milaan worden tegen een vast tarief van 80 euro in rekening gebracht."
                        : "The minimum fare for a transfer is 60 euros. All rides within the city of Milan are charged at a flat rate of 80 euros."}
                    </li>
                    <li>
                      {language === "en"
                        ? "Each hour includes 15 km of travel. Any additional kilometers will incur a charge of 2.3 euros per kilometer, or 2.1 euros per kilometer if the ride is not at an airport."
                        : language === "it"
                        ? "Ogni ora include 15 km di viaggio. I chilometri aggiuntivi comporteranno un addebito di 2,3 euro per chilometro, oppure 2,1 euro per chilometro se il viaggio non è in aeroporto."
                        : language === "fr"
                        ? "Chaque heure comprend 15 km de trajet. Tout kilomètre supplémentaire entraînera des frais de 2,3 euros par kilomètre, ou 2,1 euros par kilomètre si le trajet ne se fait pas à l'aéroport."
                        : language === "du"
                        ? "Elke uur omvat 15 km reizen. Eventuele extra kilometers worden in rekening gebracht tegen 2,3 euro per kilometer, of 2,1 euro per kilometer als de rit niet op een luchthaven is."
                        : "Each hour includes 15 km of travel. Any additional kilometers will incur a charge of 2.3 euros per kilometer, or 2.1 euros per kilometer if the ride is not at an airport."}
                    </li>
                    <li>
                      {language === "en"
                        ? "Users have the option to add multiple stops during their journey for an additional fee of 10 euros per stop."
                        : language === "it"
                        ? "Gli utenti hanno la possibilità di aggiungere più fermate durante il loro viaggio per un costo aggiuntivo di 10 euro per fermata."
                        : language === "fr"
                        ? "Les utilisateurs ont la possibilité d'ajouter plusieurs arrêts pendant leur trajet pour un supplément de 10 euros par arrêt."
                        : language === "du"
                        ? "Gebruikers hebben de mogelijkheid om meerdere stops toe te voegen tijdens hun reis voor een extra vergoeding van 10 euro per stop."
                        : "Users have the option to add multiple stops during their journey for an additional fee of 10 euros per stop."}
                    </li>
                    <li>
                      {language === "en"
                        ? "The driver will wait for up to 1-2 hours after the scheduled flight arrival time to accommodate any delays."
                        : language === "it"
                        ? "Il conducente aspetterà fino a 1-2 ore dopo l'orario di arrivo programmato del volo per accogliere eventuali ritardi."
                        : language === "fr"
                        ? "Le chauffeur attendra jusqu'à 1-2 heures après l'heure d'arrivée prévue du vol pour prendre en compte tout retard."
                        : language === "du"
                        ? "De chauffeur wacht tot 1-2 uur na de geplande vliegtuigtijd om vertragingen op te vangen."
                        : "The driver will wait for up to 1-2 hours after the scheduled flight arrival time to accommodate any delays."}
                    </li>
                  </ul>
                </ul>
              </MDBCardText> */}

              {/* Checkbox for accepting terms */}
              <div style={{ textAlign: "left" }}>
              
                <div className="terms_conditions_cards">
      <MDBCard className="card_background" alignment="center">
        <MDBCardHeader style={{ textAlign: "left", paddingLeft: "30px", fontWeight: "700" }}>
        {language === "en"
  ? "Terms & Conditions"
  : language === "it"
  ? "Termini e Condizioni"
  : language === "fr"
  ? "Conditions Générales"
  : language === "du"
  ? "Voorwaarden"
  : "Terms & Conditions"}

        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px", textAlign: "left" }}>
              <li>{
  language === "en"
    ? "The chauffeur will wait for up to 15 minutes at the designated pickup location. For airport and train station pickups, an extended waiting time of up to 1 hour is provided."
    : language === "it"
    ? "L'autista attenderà fino a 15 minuti presso il luogo di ritiro designato. Per i ritiri in aeroporto e stazione ferroviaria, è previsto un tempo di attesa prolungato fino a 1 ora."
    : language === "du"
    ? "De chauffeur wacht maximaal 15 minuten op de aangewezen ophaallocatie. Voor ophalen op luchthavens en treinstations geldt een verlengde wachttijd van maximaal 1 uur."
    : language === "fr"
    ? "Le chauffeur attendra jusqu'à 15 minutes à l'emplacement de prise en charge désigné. Pour les prises en charge à l'aéroport et à la gare, un temps d'attente prolongé allant jusqu'à 1 heure est prévu."
    : "The chauffeur will wait for up to 15 minutes at the designated pickup location. For airport and train station pickups, an extended waiting time of up to 1 hour is provided."
}</li>
<li>
  {language === "en"
    ? "The driver will wait for up to 1 hour after the scheduled flight or train arrival time to accommodate any delays."
    : language === "it"
    ? "L'autista aspetterà fino a 1 ora dopo l'orario di arrivo programmato del volo o del treno per accomodare eventuali ritardi."
    : language === "fr"
    ? "Le conducteur attendra jusqu'à 1 heure après l'heure d'arrivée prévue du vol ou du train pour tenir compte de tout retard."
    : language === "du"
    ? "De chauffeur wacht tot 1 uur na de geplande aankomsttijd van de vlucht of trein om eventuele vertragingen op te vangen."
    : "The driver will wait for up to 1 hour after the scheduled flight or train arrival time to accommodate any delays."}
</li>
<li>
      {
        language === "en"
          ? "Toll taxes are included in the above-mentioned prices."
          : language === "it"
            ? "Il pedaggio autostradale è incluso nei prezzi sopra indicati."
            : language === "fr"
              ? "Les taxes de péage sont incluses dans les prix mentionnés ci-dessus."
              : language === "du"
                ? "Tolheffingen zijn inbegrepen in de bovengenoemde prijzen."
                : "Toll taxes are included in the above-mentioned prices."
      }
    </li>

            </ul>
          </MDBCardText>
          <div className="terms_conditions_checkbox">
          <MDBCheckbox

          
                  name="terms"
                  label={
                    <>
                    {language === "en" ? (
                      <>
                        I accept the <a href="/termsandconditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                      </>
                    ) : language === "it" ? (
                      <>
                        Accetto i <a href="/termsandconditions" target="_blank" rel="noopener noreferrer">Termini e Condizioni</a>
                      </>
                    ) : language === "fr" ? (
                      <>
                        J'accepte les <a href="/termsandconditions" target="_blank" rel="noopener noreferrer">Termes et Conditions</a>
                      </>
                    ) : language === "du" ? (
                      <>
                        Ik accepteer de <a href="/termsandconditions" target="_blank" rel="noopener noreferrer">Voorwaarden</a>
                      </>
                    ) : (
                      <>
                        I accept the <a href="/termsandconditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                      </>
                    )}
                  </>
                  }
                  style={{ display: "flex" }}
                  checked={formData.terms}
                  onChange={handleInputChange}
                />
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>

                
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="payment_radio_details">
         {distanceInfo?.custom_ride !== true && (
    <MDBCheckbox
      name="paymentOption1"
      id="payNowCheckbox"
      label={
        language === "en"
          ? "Pay to Driver"
          : language === "it"
          ? "Paga al Conducente"
          : language === "fr"
          ? "Payer au Conducteur"
          : language === "du"
          ? "Betaal aan de Chauffeur"
          : "Pay to Driver"
      }
      checked={formData.paymentOption1}
      disabled={distanceInfo?.custom_ride === true} // Disable if customRide is true
      onChange={handleInputChange}
      value="payNow"
    />
  )}
  
  {/* <MDBRadio
    name="paymentOption2"
    id="payToDriverRadio"
    label={
      language === "en"
        ? "Pay to Driver"
        : language === "it"
        ? "Paga al Conducente"
        : language === "fr"
        ? "Payer au Chauffeur"
        : language === "du"
        ? "Betalen aan Chauffeur"
        : "Pay to Driver"
    }
    checked={formData.paymentOption2}
    onChange={handleInputChange}
    value="payToDriver"
  /> */}
</div>

<button
  onClick={handleSubmit}
  className="payment_button"
  disabled={!formData.terms || isSubmitting}
  style={{
    opacity: !formData.terms || isSubmitting ? 0.5 : 1, // Adjust opacity
    cursor: !formData.terms || isSubmitting ? "not-allowed" : "pointer", // Change cursor for better UX
  }}
>
  {isSubmitting ? "Submitting..." : "Proceed"}
</button>
      </Form>
    </div>
  );
};

export default Payment;
