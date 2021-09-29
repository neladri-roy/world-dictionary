import React from 'react';
import './Defination.css'

const Definations = ({ word, category, meanings }) => {
    return (
        <div className="meanings">
{
    meanings[0] && word && category === "en" && (
        <audio class="audio_src" 
        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio }
        
        style={{backgroundColor:'#fff', borderRadius: 10}}
        controls> 
            Browser doesn't support Audio
        </audio>
    ) 
}

            {
                
                word === "" ? (
                    <span className='subTitle'>Start by typing a word in Search</span>
                ) : (
                    meanings.map((mean) =>
                        mean.meanings.map((item) => 
                            item.definitions.map((def) => (
                                <div className='singleMean' >
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                                    {item.partOfSpeech && (
                                        <span>
                                            <b> Part of Speech :</b>
                                            {item.partOfSpeech}
                                        </span>
                                    )}
                                    {def.example && (
                                        <span>
                                            <b> Example :</b>
                                            {def.example}
                                        </span>
                                    )}
                                    {def.synonyms && (
                                        <span>
                                            <b> Synonyms :</b>
                                            {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}
                                    {def.antonyms && (
                                        <span>
                                            <b> Antonyms :</b>
                                            {def.antonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}
                                </div>
                            ))
                        )))
                
            }
        </div>
    );
};


export default Definations;