const Infogram = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="flex flex-col items-center justify-center gap-4 max-w-full mb-4 lg:mb-8">
                    <iframe 
                        src="https://e.infogram.com/6853e6bf-4b58-4f75-8bef-e9ab68416531?src=embed" 
                        title="CREACIÓN DE VALOR AGREGADO" 
                        width="700" 
                        height="2200" 
                        style={{
                            backgroundColor: '#000'
                        }}
                        allowFullScreen="allowfullscreen">
                    </iframe>
                    <div 
                        style={{
                            padding: '8px 0',
                            backgroundColor: '#000',
                            fontFamily: 'Arial',
                            fontSize: 13,
                            lineHeight: '15px',
                            textAlign: 'center',
                            borderTop: '1px solid #dadada',
                            margin: '0 30px',
                            width: 640
                        }}>
                        <a href="https://infogram.com/6853e6bf-4b58-4f75-8bef-e9ab68416531" style={{ color: '#989898', textDecoration: 'none' }} target="_blank">
                            CREACIÓN DE VALOR AGREGADO
                        </a>
                        <br/>
                        <a href="https://infogram.com" style={{ color: '#989898', textDecoration: 'none' }}  target="_blank" rel="nofollow">
                            Infogram
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Infogram;