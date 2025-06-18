import React from 'react'

const Page = () => {
    return (
        <div className="grid place-items-center h-screen">
            <Header></Header>
            <main>
                <section>
                    <WeatherBoard></WeatherBoard>
                </section>
            </main>
        </div>
    )
}

export default Page