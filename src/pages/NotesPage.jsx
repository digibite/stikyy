//import { fakeData as notes } from "../assets/fakeData.js";
import { useRef, useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

const NotesPage = () => {
  // fd.forEach((note) => {
  //   fetch("http://localhost:3000/api/notes", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-access-token":
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIyNDAxMjg0LCJleHAiOjE3MjI0ODc2ODR9.xFw_n_oJhiSL-Gy8AxVx-QN6JwZ7AhVkZolrytvT2Xc", // Assuming you store JWT in localStorage
  //     },
  //     body: JSON.stringify(note),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Note created:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error creating note:", error);
  //     });
  // });

  const [notes, setNotes] = useState([]);
  //console.log(notes);
  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:3000/api/notes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIyNDAxMjg0LCJleHAiOjE3MjI0ODc2ODR9.xFw_n_oJhiSL-Gy8AxVx-QN6JwZ7AhVkZolrytvT2Xc",
          // "x-access-token": localStorage.getItem("token"), // Assuming you store JWT in localStorage
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setNotes(data);
          console.log(data);
        })
        .catch((error) => console.error("Error fetching notes:", error));
    }
    fetchData();
  }, []);
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}
    </div>
  );
};
export default NotesPage;

// fetch("http://localhost:3000/api/notes", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "x-access-token":
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIyMjg1OTMzLCJleHAiOjE3MjIzNzIzMzN9.wHUFX3j3ZyOC6SQ57Necrmj9cUBTi8edMbhIUaOtDnI",
//     // "x-access-token": localStorage.getItem("token"), // Assuming you store JWT in localStorage
//   },
// })
//   .then((response) => response.json())
//   .then((data) => setNotes(data))
//   .catch((error) => console.error("Error fetching notes:", error));
