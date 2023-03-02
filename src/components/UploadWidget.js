import { useEffect, useRef } from 'react';


const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        console.log(cloudinaryRef.current);
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dtsv4ybqe',
            uploadPreset:'cg4cpvgo'
        }, (error, result) => {
            console.log(result);
        });
    }, [])
    return (
        <button onClick={() => widgetRef.current.open()}>
           Upload 
        </button>
    )
}




export default UploadWidget;