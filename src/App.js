
import { Container } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definations from './components/Definations/Definations';
import  Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState("");
const [meanings, setMeanings] = useState([]);
const [category, setCategory] = useState("en");

  const dictAPI = async()=>{
    try{
const data = await axios.get(
  `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
);
console.log(word);
setMeanings(data.data);
    }catch (error){
      console.log(error);
    }
  } 

  console.log(meanings);
  useEffect(()=>{
    dictAPI();
  },[word, category])

  return (
    <div className="App" style={{height:'100vh', backgroundColor:'#282c34',color:"white"}}>
      <Container maxWidth="md" 
      style={{display: "flex", flexDirection:"column", height:"100vh" }}>
        
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord}></Header>

        {meanings && (<Definations word={word} meanings={meanings} category={category}/>)}
        </Container>
    </div>
  );
} 

export default App;
