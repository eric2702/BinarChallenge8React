import * as React from 'react';
import InputText from './InputText';
import './style.css'

const SearchPlayerForm = () => {
    const [search, setSearch] = React.useState('')
    const [resSearch, setResSearch] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setResSearch(search)

    }

    return (
    <div className="container">
        <div className="border-div">
            <h1>SEARCH</h1>
            <form onSubmit={handleSubmit}>
            <InputText type='text' label='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
        <div className="mt-3" style={{color: "blue"}}>
            Search: {resSearch}
        </div>
    </div>
    )

}

export default SearchPlayerForm;