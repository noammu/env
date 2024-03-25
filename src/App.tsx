import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <h2>Testing env variables</h2>
            <span>
                {process.env.NODE_ENV}
                <br />
                {import.meta.env.MODE}
            </span>
            
        </div>
    );
}

export default App;
