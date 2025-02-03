import { GoogleMap, LoadScript, DirectionsRenderer, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const Map = ({ origin, destination, stops = [], hourly }) => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const calculateRoute = async () => {
      if (!origin || !destination) return; // Ensure both origin and destination are provided

      try {
        const directionsService = new window.google.maps.DirectionsService();

        // Validate and geocode locations
        const originLocation = await validateLocation(origin);
        const destinationLocation = await validateLocation(destination);

        // Handle stops safely
        const waypoints =
          stops && stops.length > 0
            ? await Promise.all(
                stops.map(async (stop) => {
                  const validatedStop = await validateLocation(stop);
                  if (validatedStop) {
                    return { location: validatedStop, stopover: true };
                  }
                  return null; // Ignore invalid stops
                })
              ).then((results) => results.filter(Boolean)) // Filter out null values
            : null; // Set to null if no waypoints

        if (!originLocation || !destinationLocation) {
          console.error("Invalid origin or destination.");
          return;
        }

        // Fetch directions
        directionsService.route(
          {
            origin: originLocation,
            destination: destinationLocation,
            travelMode: window.google.maps.TravelMode.DRIVING,
            waypoints: waypoints || undefined, // Pass waypoints only if they exist
          },
          (result, status) => {
            if (status === "OK") {
              setDirectionsResponse(result);

              // Adjust map bounds
              if (map) {
                const bounds = new window.google.maps.LatLngBounds();
                bounds.extend(originLocation);
                bounds.extend(destinationLocation);

                // Extend bounds for waypoints if they exist
                if (waypoints) {
                  waypoints.forEach((waypoint) => {
                    bounds.extend(waypoint.location);
                  });
                }

                map.fitBounds(bounds);
              }
            } else {
              console.error("Failed to fetch directions:", status);
            }
          }
        );
      } catch (error) {
        console.error("Error calculating route:", error);
      }
    };

    calculateRoute();
  }, [origin, destination, stops, map, hourly]);

  // Helper function to validate and geocode locations
  const validateLocation = async (location) => {
    if (typeof location === "object" && location.lat !== undefined && location.lng !== undefined) {
      return location; // Valid LatLng object
    }
    if (typeof location === "string" && location.trim() !== "") {
      const geocoder = new window.google.maps.Geocoder();
      return new Promise((resolve) => {
        geocoder.geocode({ address: location }, (results, status) => {
          if (status === "OK" && results[0]) {
            resolve(results[0].geometry.location);
          } else {
            console.error(`Geocoding failed for location: ${location}`);
            resolve(null); // Return null for invalid locations
          }
        });
      });
    }
    return null; // Invalid location
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "200px" }}
        zoom={10}
        center={
          directionsResponse
            ? undefined // Let the directions adjust the bounds
            : typeof origin === "object"
            ? origin
            : { lat: 0, lng: 0 } // Fallback center
        }
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        {/* Marker for Origin */}
        {origin && typeof origin === "object" && (
          <Marker position={origin} label="Pickup" />
        )}

        {/* Marker for Stops */}
        {stops.map((stop, index) =>
          typeof stop === "object" ? (
            <Marker key={index} position={stop} label={`Stop ${index + 1}`} />
          ) : null
        )}

        {/* Marker for Destination */}
        {destination && typeof destination === "object" && (
          <Marker position={destination} label="Dropoff" />
        )}

        {/* Directions Renderer */}
        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
