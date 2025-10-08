import React from 'react'
import Navbar from './Container/Navbar'
import Header from './Container/Header'
import SearchBar from './Container/SearchBar'
import JobCard from './Container/JobCard'
import JobData from './JobDummyData'
import { useState } from 'react'
import { collection, addDoc, query, getDocs } from "firebase/firestore"; 
import { db } from './firebase.config'
import { useEffect } from 'react'



function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function addUser() {
      try {
        const jobsRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", jobsRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    addUser();
  }, []);

  useEffect(() => {
    async function fetchJobs() {
      const tempJobs = [];
      const q = query(collection(db, "jobs"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        tempJobs.push({
          ...doc.data(),
          id: doc.id
        });
      });
      setJobs(tempJobs);
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {JobData.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App