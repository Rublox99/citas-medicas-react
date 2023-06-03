const Error= ({mensaje}) => {

    return (
        <>
            <div className="text-center mb-4 bg-red-500 text-white rounded-sm uppercase font-bold text-sm">
                <p>{mensaje}</p>
            </div>
        </>
    )
}

export default Error