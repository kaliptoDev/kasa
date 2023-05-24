import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className="errorPage">
            <div className="errorPage__container">
                <div className="errorPage__container__text">
                    <span className='errorPage__404'>404</span>
                    <span className='errorPage__text'>Oups! La page que vous demandez n'existe pas.</span>
                    <span className='errorPage__link'>
                        <a href='/'>Retournez à la page d'accueil</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage