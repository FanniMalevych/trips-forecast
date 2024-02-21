import { useEffect, useState } from 'react'


const useImage = (fileName, type) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                let response
                if (type === 'icon') {
                    response = await import(`../Assets/svg/${fileName}.svg`)
                } else {
                    response = await import(`../Assets/image/${fileName}.jpeg`)
                }
                // const response = type === 'icon' ?? await import(`../Assets/svg/${fileName}.svg`) 
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [fileName])

    return {
        loading,
        error,
        image,
    }
}

export default useImage