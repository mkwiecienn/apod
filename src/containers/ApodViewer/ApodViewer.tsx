import { useEffect, useState } from "react";
import { APOD, fetchApod, isNASAError, NASAResponseError } from "../../api";
import Apod from "../../components/Apod/Apod";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function ApodViewer() {
    const [apod, setApod] = useState<APOD>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<NASAResponseError | null>()

    const _getApod = async () => {
        setLoading(true);
        setError(null);

        const apodRes = await fetchApod();

        console.log(apodRes);

        if (isNASAError(apodRes)) {
            setError(apodRes);
        } else {
            setApod(apodRes[0])
        }

        setLoading(false);
    }

    useEffect(() => {
        _getApod()
    }, [])

    return (
        <div className='Viewer'>
            {loading && <span>Loading...</span>}
            {error && <ErrorMessage error={error}/>}
            {apod && <Apod apod={apod}/>}
        </div>
    )
}

export default ApodViewer;

