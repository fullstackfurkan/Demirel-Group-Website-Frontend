'use client'

export default function Map() {
    return (
        <section>
            <div className="flex justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.921852259786!2d27.85972987560016!3d40.98319202096989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4fd5818299903%3A0x8ebab5d8c954bb0f!2zREVNxLBSRUxMRVIgR1JPVVAgJiBZQVBJIMSwTsWeQUFUIEVNTEFL!5e0!3m2!1str!2str!4v1757517282507!5m2!1str!2str" 
                className="w-full h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}