import React, {useCallback, useState} from 'react';
import TablePagination from "./TablePagination";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";

function App() {
    const [limit, setLimit] = useState(10)
    const [numberOfArticles, setNumberOfArticles] = useState(214)
    const onLimitChange = useCallback((e: any) => setLimit(parseInt(e.currentTarget.value)), [])
    const onNumberOfArticlesChange = useCallback((e: any) => setNumberOfArticles(parseInt(e.currentTarget.value)), [])

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <header  style={{margin: "40px 20px"}}>
                    <strong>Pages Limit: <input value={limit} type={'number'} onChange={onLimitChange}/></strong>
                    <strong>Number of Articles: <input value={numberOfArticles} type={'number'}
                                                       onChange={onNumberOfArticlesChange}/></strong>
                    <TablePagination limit={limit} totalNumberOfSubmission={numberOfArticles}/>
                </header>
                <div style={{margin: "20px"}}>
                    <strong>Other Cases:(limit: 10):</strong>
                    {Array.from({length: 10}).map((_,index) =>
                        <TablePagination key={index} limit={limit} totalNumberOfSubmission={(index+1)*10}/>
                    )}
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
