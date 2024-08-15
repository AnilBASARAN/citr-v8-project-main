import { useEffect, useState } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import Form from "./Form";

const SearchParams = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <Form
      location={location}
      breeds={breeds}
       setAnimal={setAnimal}
        setBreed={setBreed}
         setLocation={setLocation}
          requestPets={requestPets}
          animal={animal}
          breed={breed} />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;