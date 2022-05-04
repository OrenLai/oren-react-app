import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import sampleNotes  from "../sampleNotes";

function App() {
return <div>
    <Header />
    <Footer />
    {sampleNotes.map(note =>  
    <Note 
        key={note.key} 
        title={note.title}
        content={note.content}
    />)}
   
</div>
}

export default App;