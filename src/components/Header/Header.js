import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react'
import './Header.css'
import categories from '../../components/Data/Category';

const Header = ({ category, setCategory ,word, setWord}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            type: 'dark',
        },
    });


    const handleChange = (language) => {
   setCategory(language);
   setWord('');
    };

    return (
        <div className="header">
            <span className="title"> {word ? word : "World Dictionary"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField className='search'
                        label="Search a Word"
                        id="standard-basic"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        variant="standard" />
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}

                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.value}
                                </MenuItem>
                            )
                            )
                        }



                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;