type Props = {
    city:string,
    temp?:number,
    vento?:number
}

export const Modal = ({city,temp,vento}:Props) => {
    return(
        <div className="bg-black mt-3 p-4 rounded-md border-2 border-zinc-500 border-dotted">
            <h1 className="text-center text-3xl">{city}</h1>
            <div className="flex mt-2">
                <div className="flex-1 text-center">
                    <p className="text-sm text-zinc-500">temperatura</p>
                    <div className="text-4xl mt-2">{temp}°</div>
                    <div className="flex justify-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="currentColor" className="bi bi-cloud-drizzle-fill" viewBox="0 0 16 16">
                            <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973"/>
                        </svg>
                    </div>
                </div>
                <div className="flex-1 text-center">
                    <p className="text-sm text-zinc-500">Vento</p>
                    <div className="text-4xl mt-2">{vento}<span className="text-sm">km/h</span></div>
                    <div className="flex justify-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="currentColor" className="bi bi-compass" viewBox="0 0 16 16">
                            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}