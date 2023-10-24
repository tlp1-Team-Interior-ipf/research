import React from 'react'

export const Root = () => {
    return (
        <>
            <div id='sidebar'>
                <h1>React routes</h1>
                <div>
                    <form id='search-form' role='search'>
                        <input type="search"
                            name="q"
                            id="q"
                            aria-label='Search contacts'
                            placeholder='Search'
                        />
                        <div id='search-spinner'
                            aria-hidden
                            hidden={true}
                        />
                        <div className='sr-only'
                            aria-live='polite'>
                        </div>
                    </form>
                    <form method='post'>
                        <button type='subite'>New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href={`/contact/1`}>Fad</a>
                        </li>
                        <li>
                            <a href={`/contact/2`}>Sl</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id='detail'></div>
        </>
    )
}
