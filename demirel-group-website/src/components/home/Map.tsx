'use client'

export default function Map() {
    return (
        <section className="flex items-center">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1541349.8711526114!2d26.359735493750005!3d41.01543249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f92d93d2ec5%3A0x642724b3f56e136c!2sDEM%C4%B0REL%20GRUP%20GAYR%C4%B0MENKUL!5e0!3m2!1str!2str!4v1756327694319!5m2!1str!2str" 
            width="850vw"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    )
}