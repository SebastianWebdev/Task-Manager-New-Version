import React from 'react'
import './css/Welcome.css';
const Welcome = props => {

    return (<main className="welcome-page">
        <section className="intro">
            <h2 className="section-tittle">Poznaj Task Manager</h2>
            <p className="section-describe"> Task Manager to aplikacją służąca do tworzenia list zadań.
                Jest to projekt zrealizowany za pomocą Node.js, MongoDB oraz React w ramach nauki tych technologii. Nie jest to komercyjna aplikacja, lecz na potrzeby prezentacji, możesz utworzyć konto użytkownika i tworzyć swoje własne listy zadań.
</p>
        </section>
        <section className="technology">
            <h2 className="section-tittle">Użyte technologie</h2>
            <div className="tech-wrap">
                <div className="tech-card"> <h2 className="card-tittle">MongoDB</h2>
                    <p className="card-desc">
                        Aplikacja używa nierelacyjnej bazy danych MongoDB, gdzie przechowywane są zadania, listy zadań oraz użytkownicy.
            Pracując z bazą danych wykorzystywałem <a href="https://mongoosejs.com/">Mongoose</a>. Baza danych została postawiona na <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a>
                    </p>
                    <div className="card-icon-wrap"><i className="fas fa-database"></i></div>
                </div>
                <div className="tech-card"><h2 className="card-tittle">React</h2>
                    <p className="card-desc">
                        Cały front Aplikacji powstał przy użyciu biblioteki React.js.
                        Front został stworzony jako Single Page Application.
        </p>
                    <div className="card-icon-wrap"><i className="fab fa-react"></i></div></div>
                <div className="tech-card"><h2 className="card-tittle">Node.js</h2>
                    <p className="card-desc">
                        Strona backendowa stworzona została przy użyciu Node.js oraz frameworku <a href="http://expressjs.com/">express</a>, pozwoliło mi to na utworzenie REST API. Serwer został umieszczony na platformie <a href="https://www.heroku.com/">Heroku</a> Link do kodu na <a href="https://github.com/SebastianWebdev/node.js-Task-app">Github</a>
                    </p>
                    <div className="card-icon-wrap"><i className="fab fa-node-js"></i></div></div></div>
        </section>
    </main>);
}

export default Welcome;